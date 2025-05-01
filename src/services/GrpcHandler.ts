import type { ErrorResponse } from '../types';
import { GrpcAddressService } from '.';

// Define interfaces for protobuf types to avoid 'any'
interface IProtobufRoot {
  lookupType: (name: string) => IMessageType;
}

interface IMessageType {
  decode: (buffer: Uint8Array) => IMessage;
  fromObject: (object: Record<string, unknown>) => IMessage;
  verify: (message: IMessage) => string | null;
  encode: (message: IMessage) => { finish: () => Uint8Array };
}

interface IMessage {
  toJSON: () => Record<string, unknown>;
}

// Load the Protocol Buffer definitions
let root: IProtobufRoot | null = null;

/**
 * Handler for gRPC requests over HTTP/2
 * This is optimized for Cloudflare Workers environment
 */
export class GrpcHandler {
  private grpcService: GrpcAddressService;
  private protoRoot: IProtobufRoot | null = null;

  constructor() {
    this.grpcService = new GrpcAddressService();
    void this.initProtobuf();
  }

  /**
   * Initialize Protocol Buffers
   */
  private async initProtobuf(): Promise<void> {
    if (!root) {
      try {
        // Use dynamically loaded protobuf definitions
        const protoModule = await import('../proto/generated/lokaid.js');
        
        // Ensure we have a valid module with the lokaid export
        if (typeof protoModule.lokaid === 'undefined') {
          console.error('Failed to import protobuf module - missing lokaid object');
          return;
        }
        
        // Get the actual protobuf root
        const lokaidProto = protoModule.lokaid as Record<string, unknown>;
        
        // Create a wrapper with the lookupType method
        const protoRoot = {
          ...lokaidProto,
          lookupType: function(name: string): IMessageType {
            // Format: lokaid.{TypeName}
            const typeName = name.split('.')[1];
            if (!typeName || !(typeName in lokaidProto)) {
              throw new Error(`Type ${name} not found in protobuf definition`);
            }
            
            return lokaidProto[typeName] as IMessageType;
          },
        };
        
        this.protoRoot = protoRoot as unknown as IProtobufRoot;
        root = this.protoRoot;
      } catch (error) {
        console.error('Failed to load protobuf definitions:', error);
        // We'll fall back to JSON parsing if protobuf loading fails
      }
    } else {
      this.protoRoot = root;
    }
  }

  /**
   * Handle gRPC request
   * @param request The HTTP request
   * @returns Response with gRPC data
   */
  async handleRequest(request: Request): Promise<Response> {
    try {
      // Ensure protobuf is initialized
      if (!this.protoRoot) {
        await this.initProtobuf();
      }

      // Check if this is a gRPC or JSON request
      const contentType = request.headers.get('content-type') ?? '';
      const isJson = contentType.includes('application/json');
      const isGrpc = contentType.includes('application/grpc') || 
                    contentType.includes('application/grpc+proto');
      
      console.debug('Request content type: ' + contentType + 
                    ', isJson: ' + String(isJson) + 
                    ', isGrpc: ' + String(isGrpc));
      
      if (!isJson && !isGrpc) {
        return this.createErrorResponse(415, 'Unsupported Media Type. Use application/grpc or application/json');
      }

      // Extract method from path
      const url = new URL(request.url);
      const path = url.pathname;
      const method = this.getGrpcMethodFromPath(path);
      
      if (!method) {
        return this.createErrorResponse(404, `Method not found: ${path}`);
      }

      // Get request data
      const requestData = await this.getRequestData(request);
      console.debug('Received ' + String(requestData.length) + ' bytes of request data');
      
      // Parse the request data based on content type
      const parsedData = isJson ? 
        this.parseJsonRequest(requestData) : 
        this.parseGrpcRequest(method, requestData);
      
      console.debug('Parsed request data for ' + method + ':', parsedData);
      
      // Process the request based on the method
      let result;
      try {
        result = await this.processGrpcMethod(method, parsedData);
      } catch (error) {
        console.error(`Error processing method ${method}:`, error);
        return this.createErrorResponse(
          400, 
          error instanceof Error ? 
            `Invalid request: ${error.message}` : 
            'Invalid request',
        );
      }
      
      // If response is null, return method not found
      if (result === null) {
        return this.createErrorResponse(404, `Method not implemented: ${method}`);
      }
      
      // Respond in the same format as the request
      if (isJson) {
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        // Convert result to binary and return gRPC response
        const responseBuffer = this.serializeGrpcResponse(method, result);
        return new Response(responseBuffer, {
          status: 200,
          headers: {
            'Content-Type': 'application/grpc+proto',
            'grpc-status': '0',
          },
        });
      }
    } catch (error) {
      console.error('Error handling request:', error);
      return this.createErrorResponse(
        500, 
        error instanceof Error ? error.message : 'Internal server error',
      );
    }
  }

  /**
   * Check if the request is a valid gRPC request
   */
  private isGrpcRequest(request: Request): boolean {
    const contentType = request.headers.get('content-type');
    return contentType !== null && 
           (contentType.includes('application/grpc') || 
            contentType.includes('application/grpc+proto') ||
            contentType.includes('application/json'));
  }

  /**
   * Extract the gRPC method name from the path
   */
  private getGrpcMethodFromPath(path: string): string | null {
    // Expected format: /grpc/{method}
    const parts = path.split('/');
    if (parts.length < 2) return null;
    
    // Get the last part which should be the method name
    return parts[parts.length - 1];
  }

  /**
   * Get request data from the request body
   */
  private async getRequestData(request: Request): Promise<Uint8Array> {
    const buffer = await request.arrayBuffer();
    return new Uint8Array(buffer);
  }

  /**
   * Parse JSON request data
   */
  private parseJsonRequest(data: Uint8Array): unknown {
    try {
      const text = new TextDecoder().decode(data);
      return JSON.parse(text);
    } catch (error) {
      console.error('Error parsing JSON request:', error);
      return {};
    }
  }

  /**
   * Parse binary gRPC request data using Protocol Buffers
   */
  private parseGrpcRequest(method: string, data: Uint8Array): unknown {
    // Skip the 5-byte gRPC message header if present
    const hasHeader = data.length > 5 && data[0] === 0;
    const offset = hasHeader ? 5 : 0;
    const messageData = data.slice(offset);
    
    // First try to parse as JSON since many clients may send JSON with application/grpc content type
    try {
      const text = new TextDecoder().decode(messageData);
      if (text.trim().startsWith('{') && text.trim().endsWith('}')) {
        return JSON.parse(text);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // If JSON parsing fails, continue to binary parsing
      console.debug('Not a JSON payload, trying binary format');
    }
    
    // If protobuf is not available, fall back to JSON parsing
    if (!this.protoRoot) {
      console.warn('Protocol Buffers not loaded, falling back to JSON parsing');
      return this.parseJsonRequest(messageData);
    }

    try {
      // Get the request message type from protobuf
      const requestType = `${method}Request`;
      
      // Check if lookupType is a function
      if (typeof this.protoRoot.lookupType !== 'function') {
        console.error('Protocol Buffers implementation is missing lookupType function');
        // Fall back to JSON parsing
        return this.parseJsonRequest(messageData);
      }
      
      const MessageType = this.protoRoot.lookupType(`lokaid.${requestType}`);
      
      // For empty messages or JSON content, return empty object
      if (messageData.length === 0) {
        return {};
      }
      
      // Try to decode using protobuf
      try {
        // Check if MessageType.decode exists and is a function before using it
        if (typeof MessageType.decode !== 'function') {
          console.warn('Protocol Buffers MessageType.decode is not a function, falling back to JSON parsing');
          return this.parseJsonRequest(messageData);
        }
        return MessageType.decode(messageData).toJSON();
      } catch (protoError) {
        console.warn('Failed to decode with protobuf:', protoError);
        // Fall back to JSON if protobuf decoding fails
        return this.parseJsonRequest(messageData);
      }
    } catch (error) {
      // Use string concatenation instead of template literals with possible unknown type
      console.error('Error parsing request for method ' + method + ':', error);
      return {};
    }
  }

  /**
   * Process the gRPC method by calling the appropriate service method
   */
  private async processGrpcMethod(method: string, data: unknown): Promise<unknown> {
    // Validate the data if needed
    this.validateRequest(method, data);
    
    // Map method names to service methods
    switch (method) {
    case 'GetAllStates':
      return await this.grpcService.getAllStates();
      
    case 'GetState':
      return await this.grpcService.getState(data as { state_code: string });
      
    case 'GetCitiesInState':
      return await this.grpcService.getCitiesInState(data as { state_code: string });
      
    case 'GetCity':
      return await this.grpcService.getCity(data as { city_code: string });
      
    case 'GetDistrictsInCity':
      return await this.grpcService.getDistrictsInCity(data as { city_code: string });
      
    case 'GetDistrict':
      return await this.grpcService.getDistrict(data as { district_code: string });
      
    case 'GetVillagesInDistrict':
      return await this.grpcService.getVillagesInDistrict(data as { district_code: string });
      
    case 'GetVillage':
      return await this.grpcService.getVillage(data as { village_code: string });
      
    case 'HealthCheck':
      return await this.grpcService.healthCheck();
      
    default:
      return null;
    }
  }

  /**
   * Validate the request data
   */
  private validateRequest(method: string, data: unknown): void {
    // Add validation logic based on the method
    switch (method) {
    case 'GetState':
    case 'GetCitiesInState':
      this.validateHasField(data, 'state_code', method);
      break;
    case 'GetCity':
    case 'GetDistrictsInCity':
      this.validateHasField(data, 'city_code', method);
      break;
    case 'GetDistrict':
    case 'GetVillagesInDistrict':
      this.validateHasField(data, 'district_code', method);
      break;
    case 'GetVillage':
      this.validateHasField(data, 'village_code', method);
      break;
    default:
      // No validation needed for other methods
      break;
    }
  }

  /**
   * Validate that the data has a required field
   */
  private validateHasField(data: unknown, field: string, method: string): void {
    if (!data || typeof data !== 'object' || !(field in (data as Record<string, unknown>))) {
      throw new Error(`Missing required field '${field}' for method ${method}`);
    }
    
    // Only check if value is undefined or null, allowing empty strings and zeros
    const value = (data as Record<string, unknown>)[field];
    if (value === undefined || value === null) {
      throw new Error(`Missing required field '${field}' for method ${method}`);
    }
  }

  /**
   * Serialize the response to Protocol Buffer binary format
   */
  private serializeGrpcResponse(method: string, data: unknown): Uint8Array {
    // If protobuf is not available, fall back to JSON serialization
    if (!this.protoRoot) {
      console.warn('Protocol Buffers not loaded, falling back to JSON serialization');
      return this.serializeJsonResponse(data);
    }

    try {
      // Get the response message type from protobuf
      const responseType = `${method}Response`;
      const MessageType = this.protoRoot.lookupType(`lokaid.${responseType}`);
      
      // Verify the message
      const message = MessageType.fromObject(data as Record<string, unknown>);
      const verificationError = MessageType.verify(message);
      if (verificationError) {
        console.warn('Response verification failed:', verificationError);
        return this.serializeJsonResponse(data);
      }
      
      // Encode the message
      const buffer = MessageType.encode(message).finish();
      
      // Add gRPC message header (compression flag + 4-byte length prefix)
      const header = new Uint8Array(5);
      header[0] = 0; // No compression
      
      // Message length (4 bytes, big-endian)
      const length = buffer.length;
      header[1] = (length >> 24) & 0xFF;
      header[2] = (length >> 16) & 0xFF;
      header[3] = (length >> 8) & 0xFF;
      header[4] = length & 0xFF;
      
      // Combine header and message
      const result = new Uint8Array(5 + buffer.length);
      result.set(header);
      result.set(buffer, 5);
      
      return result;
    } catch (error) {
      // Use string concatenation instead of template literals with possible unknown type
      console.error('Error serializing response for method ' + method + ':', error);
      // Fall back to JSON serialization
      return this.serializeJsonResponse(data);
    }
  }

  /**
   * Serialize response to JSON format with gRPC header
   */
  private serializeJsonResponse(data: unknown): Uint8Array {
    // Convert data to JSON string
    const jsonString = JSON.stringify(data);
    const textEncoder = new TextEncoder();
    const messageData = textEncoder.encode(jsonString);
    
    // Add gRPC message header
    const header = new Uint8Array(5);
    header[0] = 0; // No compression
    
    // Message length (4 bytes, big-endian)
    const length = messageData.length;
    header[1] = (length >> 24) & 0xFF;
    header[2] = (length >> 16) & 0xFF;
    header[3] = (length >> 8) & 0xFF;
    header[4] = length & 0xFF;
    
    // Combine header and message
    const result = new Uint8Array(5 + messageData.length);
    result.set(header);
    result.set(messageData, 5);
    
    return result;
  }

  /**
   * Create an error response
   */
  private createErrorResponse(status: number, message: string): Response {
    const errorResponse: ErrorResponse = {
      error: message,
      status,
      timestamp: new Date().toISOString(),
    };
    
    return new Response(JSON.stringify(errorResponse), {
      status,
      headers: {
        'Content-Type': 'application/json',
        'grpc-status': status.toString(),
        'grpc-message': encodeURIComponent(message),
      },
    });
  }
} 
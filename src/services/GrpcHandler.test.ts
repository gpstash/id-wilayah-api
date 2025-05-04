import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { GrpcHandler } from '.';

// Define proper response types to avoid TypeScript errors
interface ErrorResponse {
  error: string;
  status: number;
  timestamp: string;
}

interface StateResponse {
  state: {
    code: string;
    value: string;
  };
}

interface StatesResponse {
  states: {
    code: string;
    value: string;
  }[];
}

interface HealthCheckResponse {
  status: string;
  version: string;
  timestamp: string;
}

// Helper function to properly type Response.json() results
async function getResponseData<T>(response: Response): Promise<T> {
  return await response.json() as T;
}

// Mock protobufjs
vi.mock('protobufjs', () => {
  return {
    default: {},
  };
});

// Mock GrpcAddressService
vi.mock('./GrpcAddressService', () => {
  return {
    GrpcAddressService: vi.fn().mockImplementation(() => ({
      getAllStates: vi.fn().mockResolvedValue({
        states: [{ code: '31', value: 'DKI JAKARTA' }],
      }),
      getState: vi.fn().mockImplementation((data: { state_code: string }) => {
        if (data.state_code === '31') {
          return Promise.resolve({
            state: { code: '31', value: 'DKI JAKARTA' },
          });
        }
        throw new Error(`State with code "${data.state_code}" not found`);
      }),
      getCitiesInState: vi.fn().mockResolvedValue({
        cities: [{ code: '31.74', value: 'JAKARTA SELATAN' }],
      }),
      getCity: vi.fn().mockResolvedValue({
        city: { code: '31.74', value: 'JAKARTA SELATAN' },
      }),
      getDistrictsInCity: vi.fn().mockResolvedValue({
        districts: [{ code: '31.74.04', value: 'PASAR MINGGU' }],
      }),
      getDistrict: vi.fn().mockResolvedValue({
        district: { code: '31.74.04', value: 'PASAR MINGGU' },
      }),
      getVillagesInDistrict: vi.fn().mockResolvedValue({
        villages: [{ code: '31.74.04.1001', value: 'PASAR MINGGU' }],
      }),
      getVillage: vi.fn().mockResolvedValue({
        village: { code: '31.74.04.1001', value: 'PASAR MINGGU' },
      }),
      healthCheck: vi.fn().mockResolvedValue({
        status: 'OK',
        version: '1.0.0',
        timestamp: '2023-05-01T12:34:56.789Z',
      }),
    })),
  };
});

// Mock the dynamic import of Protocol Buffers
vi.mock('../proto/generated/lokaid.js', () => {
  return {
    lokaid: {
      GetStateRequest: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({ state_code: '31' }),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
      GetStateResponse: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({ state: { code: '31', value: 'DKI JAKARTA' } }),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
      GetAllStatesRequest: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({}),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
      GetAllStatesResponse: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({ states: [{ code: '31', value: 'DKI JAKARTA' }] }),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
      HealthCheckRequest: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({}),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
      HealthCheckResponse: { 
        decode: vi.fn().mockImplementation(() => ({
          toJSON: vi.fn().mockReturnValue({
            status: 'OK',
            version: '1.0.0',
            timestamp: '2023-05-01T12:34:56.789Z',
          }),
        })),
        fromObject: vi.fn().mockReturnValue({}),
        verify: vi.fn().mockReturnValue(null),
        encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
      },
    },
  };
});

let handler: GrpcHandler;
let originalConsoleError: typeof console.error;
let originalConsoleDebug: typeof console.debug;

beforeEach(async () => {
  // Save original console methods
  originalConsoleError = console.error;
  originalConsoleDebug = console.debug;
  
  // Mock console methods to keep test output clean
  console.error = vi.fn();
  console.debug = vi.fn();

  // Create a fresh handler for each test
  handler = new GrpcHandler();
  
  // Wait for initialization
  await new Promise(resolve => setTimeout(resolve, 10));
  
  vi.clearAllMocks();
});

afterEach(() => {
  // Restore original console methods
  console.error = originalConsoleError;
  console.debug = originalConsoleDebug;
});

// Create test utility functions
const createRequest = (method: string, contentType: string, data: unknown): Request => {
  const url = `https://example.com/grpc/${method}`;
  const headers = new Headers();
  headers.set('content-type', contentType);
  
  const body = typeof data === 'string' 
    ? data 
    : JSON.stringify(data);
    
  return new Request(url, {
    method: 'POST',
    headers,
    body,
  });
};

describe('GrpcHandler', () => {
  describe('handleRequest', () => {
    it('handles JSON content type with valid request', async () => {
      const request = createRequest('GetState', 'application/json', { state_code: '31' });
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await getResponseData<StateResponse>(response);
      expect(responseData).toEqual({
        state: { code: '31', value: 'DKI JAKARTA' },
      });
    });
    
    it('handles gRPC content type with JSON payload', async () => {
      const request = createRequest('GetState', 'application/grpc+proto', { state_code: '31' });
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/grpc+proto');
      
      // Binary response, but we can check headers
      expect(response.headers.get('grpc-status')).toBe('0');
    });
    
    it('rejects unsupported content types', async () => {
      const request = createRequest('GetState', 'text/plain', { state_code: '31' });
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(415);
      
      const responseData = await getResponseData<ErrorResponse>(response);
      expect(responseData.error).toContain('Unsupported Media Type');
    });
    
    it('returns 404 for unknown methods', async () => {
      const request = createRequest('NonExistentMethod', 'application/json', {});
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(404);
      
      const responseData = await getResponseData<ErrorResponse>(response);
      expect(responseData.error).toContain('Method not implemented');
    });
    
    it('validates required fields', async () => {
      const request = createRequest('GetState', 'application/json', {});
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(400);
      
      const responseData = await getResponseData<ErrorResponse>(response);
      expect(responseData.error).toContain('Missing required field');
    });
    
    it('allows falsy but valid field values', async () => {
      // Mock implementation for specific test case
      const mockAddressService = {
        getState: vi.fn().mockResolvedValue({
          state: { code: '0', value: 'TEST STATE' },
        }),
      };
      
      // @ts-expect-error - mocking private service
      handler.grpcService = mockAddressService;
      
      const request = createRequest('GetState', 'application/json', { state_code: '0' });
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      
      const responseData = await getResponseData<StateResponse>(response);
      expect(responseData).toEqual({
        state: { code: '0', value: 'TEST STATE' },
      });
    });
    
    it('passes empty string values correctly', async () => {
      // Mock implementation for specific test case
      const mockAddressService = {
        getState: vi.fn().mockResolvedValue({
          state: { code: '', value: 'EMPTY CODE TEST' },
        }),
      };
      
      // @ts-expect-error - mocking private service
      handler.grpcService = mockAddressService;
      
      const request = createRequest('GetState', 'application/json', { state_code: '' });
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      
      const responseData = await getResponseData<StateResponse>(response);
      expect(responseData).toEqual({
        state: { code: '', value: 'EMPTY CODE TEST' },
      });
    });
  });
  
  describe('getGrpcMethodFromPath', () => {
    it('extracts method name from valid paths', () => {
      // @ts-expect-error - accessing private method for testing
      const method = handler.getGrpcMethodFromPath('/grpc/GetState');
      expect(method).toBe('GetState');
    });
    
    it('handles paths with multiple segments', () => {
      // @ts-expect-error - accessing private method for testing
      const method = handler.getGrpcMethodFromPath('/api/v1/grpc/GetState');
      expect(method).toBe('GetState');
    });
    
    it('returns null for invalid paths', () => {
      // @ts-expect-error - accessing private method for testing
      const method = handler.getGrpcMethodFromPath('');
      expect(method).toBeNull();
    });
  });
  
  describe('validateHasField', () => {
    it('accepts valid field values', () => {
      const validTestCases = [
        { data: { state_code: '31' }, field: 'state_code', method: 'GetState' },
        { data: { state_code: 0 }, field: 'state_code', method: 'GetState' },
        { data: { state_code: '' }, field: 'state_code', method: 'GetState' },
        { data: { state_code: false }, field: 'state_code', method: 'GetState' },
      ];
      
      for (const testCase of validTestCases) {
        // Should not throw
        expect(() => {
          // @ts-expect-error - accessing private method for testing
          handler.validateHasField(testCase.data, testCase.field, testCase.method);
        }).not.toThrow();
      }
    });
    
    it('rejects missing fields', () => {
      const invalidTestCases = [
        { data: {}, field: 'state_code', method: 'GetState' },
        { data: { other_field: '31' }, field: 'state_code', method: 'GetState' },
        { data: null, field: 'state_code', method: 'GetState' },
        { data: undefined, field: 'state_code', method: 'GetState' },
        { data: { state_code: null }, field: 'state_code', method: 'GetState' },
        { data: { state_code: undefined }, field: 'state_code', method: 'GetState' },
      ];
      
      for (const testCase of invalidTestCases) {
        expect(() => {
          // @ts-expect-error - accessing private method for testing
          handler.validateHasField(testCase.data, testCase.field, testCase.method);
        }).toThrow(/Missing required field/);
      }
    });
  });
  
  describe('parseJsonRequest', () => {
    it('parses valid JSON', () => {
      const jsonData = new TextEncoder().encode('{"state_code":"31"}');
      
      // @ts-expect-error - accessing private method for testing
      const result = handler.parseJsonRequest(jsonData);
      
      expect(result).toEqual({ state_code: '31' });
    });
    
    it('returns empty object for invalid JSON', () => {
      const invalidJson = new TextEncoder().encode('{"state_code:31"}'); // Missing quote
      
      // @ts-expect-error - accessing private method for testing
      const result = handler.parseJsonRequest(invalidJson);
      
      expect(result).toEqual({});
    });
  });
  
  describe('parseGrpcRequest', () => {
    it('detects JSON in gRPC content type', () => {
      const jsonData = new TextEncoder().encode('{"state_code":"31"}');
      
      // @ts-expect-error - accessing private method for testing
      const result = handler.parseGrpcRequest('GetState', jsonData) as Record<string, unknown>;
      
      expect(result).toEqual({ state_code: '31' });
    });
    
    it('handles empty requests', () => {
      const emptyData = new Uint8Array(0);
      
      // @ts-expect-error - accessing private method for testing
      const result = handler.parseGrpcRequest('GetState', emptyData);
      
      expect(result).toEqual({});
    });
  });
  
  describe('createErrorResponse', () => {
    it('creates properly formatted error responses', async () => {
      // @ts-expect-error - accessing private method for testing
      const response = handler.createErrorResponse(400, 'Test error message');
      
      expect(response.status).toBe(400);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      
      const responseData = await getResponseData<ErrorResponse>(response);
      
      expect(responseData).toEqual({
        error: 'Test error message',
        status: 400,
        timestamp: expect.any(String) as string,
      });
    });
    
    it('includes gRPC status headers', () => {
      // @ts-expect-error - accessing private method for testing
      const response = handler.createErrorResponse(404, 'Not found');
      
      expect(response.headers.get('grpc-status')).toBe('404');
      expect(response.headers.get('grpc-message')).toBe('Not%20found');
    });
  });
  
  describe('Method-specific tests', () => {
    it('processes GetAllStates request correctly', async () => {
      const request = createRequest('GetAllStates', 'application/json', {});
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      
      const responseData = await getResponseData<StatesResponse>(response);
      
      expect(responseData).toEqual({
        states: [{ code: '31', value: 'DKI JAKARTA' }],
      });
    });
    
    it('processes HealthCheck request correctly', async () => {
      const request = createRequest('HealthCheck', 'application/json', {});
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
      
      const responseData = await getResponseData<HealthCheckResponse>(response);
      
      expect(responseData).toEqual({
        status: 'OK',
        version: '1.0.0',
        timestamp: '2023-05-01T12:34:56.789Z',
      });
    });
  });
  
  describe('Protocol Buffers handling', () => {
    it('handles missing protobuf module', async () => {
      // Create a mock implementation for the import
      vi.doMock('../proto/generated/lokaid.js', () => ({
        lokaid: undefined,
      }));
      
      // Create a new handler to trigger the initialization with the mocked module
      const newHandler = new GrpcHandler();
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Make a request that would use protobuf
      const request = createRequest('GetState', 'application/grpc+proto', { state_code: '31' });
      const response = await newHandler.handleRequest(request);
      
      // Should fall back to JSON handling
      expect(response.status).toBe(200);
    });
    
    it('handles corrupted binary data gracefully', async () => {
      // Create a custom handler just for this test
      const testHandler = new GrpcHandler();
      
      // Create a request with invalid binary data
      const invalidData = new Uint8Array([1, 2, 3, 4, 5]); // Not valid protobuf
      
      const url = 'https://example.com/grpc/GetState';
      const headers = new Headers();
      headers.set('content-type', 'application/grpc+proto');
      
      const request = new Request(url, {
        method: 'POST',
        headers,
        body: invalidData,
      });
      
      // Mock specific methods for this test
      // @ts-expect-error - accessing private methods
      testHandler.parseGrpcRequest = vi.fn().mockImplementation(() => {
        return { state_code: '31' };
      });
      
      // Mock the service implementation
      // @ts-expect-error - accessing private property
      testHandler.grpcService = {
        getState: vi.fn().mockResolvedValue({
          state: { code: '31', value: 'DKI JAKARTA' },
        }),
      };
      
      const response = await testHandler.handleRequest(request);
      
      // Should handle corrupted data gracefully by falling back to JSON parsing
      expect(response.status).toBe(200);
    });
    
    it('handles protobuf verification errors', async () => {
      // Mock module with verification errors
      vi.doMock('../proto/generated/lokaid.js', () => ({
        lokaid: {
          GetStateRequest: { 
            fromObject: vi.fn().mockReturnValue({}),
            verify: vi.fn().mockReturnValue(null),
            encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
          },
          GetStateResponse: { 
            fromObject: vi.fn().mockReturnValue({}),
            verify: vi.fn().mockReturnValue('Validation failed'),
            encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
          },
        },
      }));
      
      // Create a new handler to use the mocked module
      const newHandler = new GrpcHandler();
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Make a request that would trigger the verification error
      const request = createRequest('GetState', 'application/json', { state_code: '31' });
      const response = await newHandler.handleRequest(request);
      
      // Should fall back to JSON serialization
      expect(response.status).toBe(200);
    });
    
    it('handles errors in protobuf encoding', async () => {
      // Mock module with encoding errors
      vi.doMock('../proto/generated/lokaid.js', () => ({
        lokaid: {
          GetStateRequest: { 
            fromObject: vi.fn().mockReturnValue({}),
            verify: vi.fn().mockReturnValue(null),
            encode: vi.fn().mockReturnValue({ finish: vi.fn().mockReturnValue(new Uint8Array(10)) }),
          },
          GetStateResponse: { 
            fromObject: vi.fn().mockReturnValue({}),
            verify: vi.fn().mockReturnValue(null),
            encode: vi.fn().mockImplementation(() => {
              throw new Error('Encoding failed');
            }),
          },
        },
      }));
      
      // Create a new handler to use the mocked module
      const newHandler = new GrpcHandler();
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Make a request that would trigger the encoding error
      const request = createRequest('GetState', 'application/grpc+proto', { state_code: '31' });
      const response = await newHandler.handleRequest(request);
      
      // Should fall back to JSON serialization
      expect(response.status).toBe(200);
    });
  });

  describe('Error handling', () => {
    it('handles general errors during request processing', async () => {
      // Create a handler with a mock service that throws an error
      const errorHandler = new GrpcHandler();
      
      // Mock the service to throw an error
      // @ts-expect-error - mocking private property
      errorHandler.grpcService = {
        getAllStates: vi.fn().mockImplementation(() => {
          throw new Error('Unexpected error');
        }),
      };
      
      const request = createRequest('GetAllStates', 'application/json', {});
      const response = await errorHandler.handleRequest(request);
      
      // Should return an error response
      expect(response.status).toBe(400);
      
      const responseData = await getResponseData<ErrorResponse>(response);
      expect(responseData.error).toBe('Invalid request: Unexpected error');
    });
    
    it('creates detailed error responses with correct status and headers', async () => {
      // @ts-expect-error - accessing private method
      const errorResponse = handler.createErrorResponse(503, 'Service Unavailable');
      
      expect(errorResponse.status).toBe(503);
      expect(errorResponse.headers.get('grpc-status')).toBe('503');
      expect(errorResponse.headers.get('grpc-message')).toBe('Service%20Unavailable');
      
      const responseData = await getResponseData<ErrorResponse>(errorResponse);
      expect(responseData.error).toBe('Service Unavailable');
      expect(responseData.status).toBe(503);
      expect(responseData.timestamp).toBeDefined();
    });
  });
  
  describe('Request parsing', () => {
    it('handles binary data with gRPC header', async () => {
      // Create a binary request with a gRPC header (compression flag + 4-byte length)
      const jsonData = JSON.stringify({ state_code: '31' });
      const textEncoder = new TextEncoder();
      const messageData = textEncoder.encode(jsonData);
      
      // Create gRPC header
      const header = new Uint8Array(5);
      header[0] = 0; // No compression
      
      // Message length (4 bytes, big-endian)
      const length = messageData.length;
      header[1] = (length >> 24) & 0xFF;
      header[2] = (length >> 16) & 0xFF;
      header[3] = (length >> 8) & 0xFF;
      header[4] = length & 0xFF;
      
      // Combine header and message
      const requestBody = new Uint8Array(5 + messageData.length);
      requestBody.set(header);
      requestBody.set(messageData, 5);
      
      // Create the request
      const url = 'https://example.com/grpc/GetState';
      const headers = new Headers();
      headers.set('content-type', 'application/grpc+proto');
      
      const request = new Request(url, {
        method: 'POST',
        headers,
        body: requestBody,
      });
      
      // Override the protocol behavior for this specific test
      // @ts-expect-error - accessing private property
      handler.protoRoot = {
        lookupType: vi.fn().mockImplementation(() => {
          return {
            decode: vi.fn().mockImplementation(() => ({
              toJSON: vi.fn().mockReturnValue({ state_code: '31' }),
            })),
          };
        }),
      };
      
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
    });
    
    it('handles empty request bodies', async () => {
      // Create request with empty body
      const url = 'https://example.com/grpc/GetAllStates';
      const headers = new Headers();
      headers.set('content-type', 'application/grpc+proto');
      
      const request = new Request(url, {
        method: 'POST',
        headers,
        body: new Uint8Array(0),
      });
      
      const response = await handler.handleRequest(request);
      
      // Should still work for methods that don't require parameters
      expect(response.status).toBe(200);
    });
    
    it('handles JSON with grpc content type', async () => {
      // Create a JSON request with grpc content type
      const jsonData = JSON.stringify({ state_code: '31' });
      
      const url = 'https://example.com/grpc/GetState';
      const headers = new Headers();
      headers.set('content-type', 'application/grpc+proto');
      
      const request = new Request(url, {
        method: 'POST',
        headers,
        body: jsonData,
      });
      
      const response = await handler.handleRequest(request);
      
      expect(response.status).toBe(200);
    });
  });
  
  describe('JSON serialization', () => {
    it('falls back to JSON serialization when protobuf fails', async () => {
      // Create a new handler with mock that makes protobuf unavailable
      const jsonHandler = new GrpcHandler();
      // @ts-expect-error - accessing private property
      jsonHandler.protoRoot = null;
      
      const request = createRequest('GetState', 'application/grpc+proto', { state_code: '31' });
      const response = await jsonHandler.handleRequest(request);
      
      // Should still produce a valid response using JSON serialization
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/grpc+proto');
    });
    
    it('serializes complex data correctly', () => {
      // @ts-expect-error - accessing private method
      const result = handler.serializeJsonResponse({
        nested: {
          array: [1, 2, 3],
          value: 'test',
        },
      });
      
      // Should produce a Uint8Array
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBeGreaterThan(5); // Header + data
    });
  });
}); 
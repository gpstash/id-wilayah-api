/**
 * Simple gRPC client for testing the gRPC service
 * This is implemented using fetch API to be compatible with browser environments
 */
export class GrpcClient {
  private baseUrl: string;

  /**
   * Create a new gRPC client
   * @param baseUrl Base URL of the gRPC service (e.g., 'https://lokaid.gilangpratama.id/grpc')
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  }

  /**
   * Call a gRPC method
   * @param method Method name
   * @param request Request data
   * @returns Promise with the response data
   */
  async call<R = unknown>(
    method: string,
    request: unknown,
  ): Promise<R> {
    const url = `${this.baseUrl}/${method}`;
    
    // Convert request to JSON
    const requestJson = JSON.stringify(request);
    
    // Create a 5-byte header (simplified gRPC format)
    const textEncoder = new TextEncoder();
    const messageData = textEncoder.encode(requestJson);
    
    // Header: compression flag (1 byte) + message length (4 bytes)
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
    
    // Make the request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/grpc+proto',
      },
      body: requestBody,
    });
    
    // Check for errors
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`gRPC call failed: ${errorText}`);
    }
    
    // Parse the response
    const responseBuffer = await response.arrayBuffer();
    const responseData = new Uint8Array(responseBuffer);
    
    // Skip the 5-byte gRPC message header if present
    const offset = responseData.length > 5 && responseData[0] === 0 ? 5 : 0;
    const responseMessage = responseData.slice(offset);
    
    // Parse the JSON response
    const text = new TextDecoder().decode(responseMessage);
    return JSON.parse(text) as R;
  }

  /**
   * Get all states
   */
  async getAllStates() {
    return this.call('GetAllStates', {});
  }

  /**
   * Get a specific state by code
   */
  async getState(stateCode: string) {
    return this.call('GetState', { state_code: stateCode });
  }

  /**
   * Get all cities in a state
   */
  async getCitiesInState(stateCode: string) {
    return this.call('GetCitiesInState', { state_code: stateCode });
  }

  /**
   * Get a specific city by code
   */
  async getCity(cityCode: string) {
    return this.call('GetCity', { city_code: cityCode });
  }

  /**
   * Get all districts in a city
   */
  async getDistrictsInCity(cityCode: string) {
    return this.call('GetDistrictsInCity', { city_code: cityCode });
  }

  /**
   * Get a specific district by code
   */
  async getDistrict(districtCode: string) {
    return this.call('GetDistrict', { district_code: districtCode });
  }

  /**
   * Get all villages in a district
   */
  async getVillagesInDistrict(districtCode: string) {
    return this.call('GetVillagesInDistrict', { district_code: districtCode });
  }

  /**
   * Get a specific village by code
   */
  async getVillage(villageCode: string) {
    return this.call('GetVillage', { village_code: villageCode });
  }

  /**
   * Check API health
   */
  async healthCheck() {
    return this.call('HealthCheck', {});
  }
} 
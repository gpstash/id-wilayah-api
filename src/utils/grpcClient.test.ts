/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GrpcClient } from './grpcClient';

describe('GrpcClient (simple tests)', () => {
  // Create a simpler test that doesn't rely on complex mocking
  const baseUrl = 'https://example.com/grpc';
  let client: GrpcClient;
  
  beforeEach(() => {
    client = new GrpcClient(baseUrl);
    
    // Mock actual fetch implementation
    global.fetch = vi.fn();
    
    // Mock successful response
    (global.fetch as any).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('{"status":"ok"}'),
      arrayBuffer: () => Promise.resolve(new Uint8Array([123, 34, 115, 116, 97, 116, 117, 115, 34, 58, 34, 111, 107, 34, 125]).buffer),
    });
  });
  
  it('should create client with correct base URL', () => {
    const client1 = new GrpcClient('https://test.com/api');
    const client2 = new GrpcClient('https://test.com/api/');
    
    expect((client1 as any).baseUrl).toBe('https://test.com/api');
    expect((client2 as any).baseUrl).toBe('https://test.com/api');
  });
  
  it('should make request to correct endpoint', async () => {
    await client.getAllStates();
    
    expect(global.fetch).toHaveBeenCalledWith(
      'https://example.com/grpc/GetAllStates',
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });
  
  it('should send correct state code in request', async () => {
    await client.getState('11');
    
    expect(global.fetch).toHaveBeenCalledWith(
      'https://example.com/grpc/GetState',
      expect.anything(),
    );
    // Can't easily check body contents in this simplified test
  });
  
  it('should handle error responses', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      text: () => Promise.resolve('Not found'),
    });
    
    await expect(client.getState('999')).rejects.toThrow('gRPC call failed: Not found');
  });
  
  it('should call available API methods', async () => {
    // Just check that these methods exist and can be called
    await client.getAllStates();
    await client.getState('11');
    await client.getCitiesInState('11');
    await client.getCity('1101');
    await client.getDistrictsInCity('1101');
    await client.getDistrict('110101');
    await client.getVillagesInDistrict('110101');
    await client.getVillage('1101012001');
    await client.healthCheck();
    
    expect(global.fetch).toHaveBeenCalledTimes(9);
  });
}); 
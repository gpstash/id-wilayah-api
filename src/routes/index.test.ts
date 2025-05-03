import type { Hono } from 'hono';
import { beforeAll, afterAll, describe, expect, it, vi } from 'vitest';
import type { CloudflareBindings } from '../types';
import { createRoutes } from './index';

/**
 * This test suite verifies that all routes in the application are correctly configured.
 * It focuses on checking that the application's routes are registered properly,
 * while the detailed functionality of each route is tested in their individual test files.
 */

let app: Hono<{Bindings: CloudflareBindings}>;
let originalConsoleError: typeof console.error;

// Mock console.error to suppress error messages in tests
beforeAll(() => {
  // Save original console.error
  originalConsoleError = console.error;
  // Mock console.error to prevent logs in test output
  console.error = vi.fn();
  
  app = createRoutes();
});

afterAll(() => {
  // Restore original console.error
  console.error = originalConsoleError;
});

describe('API Routes Configuration', () => {
  // Test that route handlers are registered
  it('registers the health route', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);
  });
  
  it('registers the states routes', async () => {
    const res = await app.request('/states');
    expect(res.status).toBe(200);
  });
  
  it('registers the state by code route', async () => {
    const res = await app.request('/states/31');
    expect(res.status).toBe(200);
  });
  
  it('registers the state cities route', async () => {
    const res = await app.request('/states/31/cities');
    expect(res.status).toBe(200);
  });
  
  it('registers the cities by code route', async () => {
    const res = await app.request('/cities/31.74');
    expect(res.status).toBe(200);
  });
  
  it('registers the city districts route', async () => {
    const res = await app.request('/cities/31.74/districts');
    expect(res.status).toBe(200);
  });
  
  it('registers the districts by code route', async () => {
    const res = await app.request('/districts/31.74.04');
    expect(res.status).toBe(200);
  });
  
  it('registers the district villages route', async () => {
    const res = await app.request('/districts/31.74.04/villages');
    expect(res.status).toBe(200);
  });
  
  it('registers the villages by code route', async () => {
    const res = await app.request('/villages/31.74.04.1001');
    expect(res.status).toBe(200);
  });
  
  // Test that the error handling is working correctly
  it('handles 404 for non-existent routes', async () => {
    const res = await app.request('/non-existent-path');
    expect(res.status).toBe(404);
  });
  
  // Test that validation errors are handled correctly
  it('returns 400 for malformed state code', async () => {
    const res = await app.request('/states/invalid');
    expect(res.status).toBe(400);
  });
  
  it('returns 400 for malformed city code', async () => {
    const res = await app.request('/cities/invalid');
    expect(res.status).toBe(400);
  });
  
  it('returns 400 for malformed district code', async () => {
    const res = await app.request('/districts/invalid');
    expect(res.status).toBe(400);
  });
  
  it('returns 400 for malformed village code', async () => {
    const res = await app.request('/villages/invalid');
    expect(res.status).toBe(400);
  });
  
  // Test method validation
  it('rejects POST requests to GET endpoints', async () => {
    const res = await app.request('/states', {
      method: 'POST',
    });
    // Either 405 Method Not Allowed or 400 Bad Request would be acceptable
    expect(res.status === 405 || res.status === 400 || res.status === 404).toBeTruthy();
  });
}); 
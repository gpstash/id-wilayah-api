import { Hono } from 'hono';
import { describe, it, expect, beforeEach } from 'vitest';
import type { CloudflareBindings } from '../types';
import { applyGlobalHandlers } from './appHandlers';

// Type guard to assert error response structure
interface ErrorResponseShape {
  error: string;
  status: number;
  path: string;
  timestamp: string;
}
function isErrorResponse(body: unknown): body is ErrorResponseShape {
  return !!body &&
    typeof body === 'object' &&
    typeof (body as Record<string, unknown>).error === 'string' &&
    typeof (body as Record<string, unknown>).status === 'number' &&
    typeof (body as Record<string, unknown>).path === 'string' &&
    typeof (body as Record<string, unknown>).timestamp === 'string';
}

describe('applyGlobalHandlers', () => {
  let app: Hono<{ Bindings: CloudflareBindings }>;

  beforeEach(() => {
    app = new Hono<{ Bindings: CloudflareBindings }>();
    // Route that throws an error
    app.get('/error', () => {
      throw new Error('Simulated error');
    });
    applyGlobalHandlers(app);
  });

  it('returns JSON error response on uncaught error', async () => {
    const res = await app.request('/error');
    expect(res.status).toBe(500);
    expect(res.headers.get('content-type')).toContain('application/json');
    const body = await res.json();
    expect(isErrorResponse(body)).toBe(true);
    if (isErrorResponse(body)) {
      expect(body.error).toBe('Internal server error');
      expect(body.status).toBe(500);
      expect(body.path).toBe('/error');
      expect(typeof body.timestamp).toBe('string');
    }
  });

  it('returns JSON not found response for unknown route', async () => {
    const res = await app.request('/not-found');
    expect(res.status).toBe(404);
    expect(res.headers.get('content-type')).toContain('application/json');
    const body = await res.json();
    expect(isErrorResponse(body)).toBe(true);
    if (isErrorResponse(body)) {
      expect(body.error).toBe('Resource not found');
      expect(body.status).toBe(404);
      expect(body.path).toBe('/not-found');
      expect(typeof body.timestamp).toBe('string');
    }
  });

  it('sets Content-Type header to application/json for errors', async () => {
    const res = await app.request('/error');
    expect(res.headers.get('content-type')).toContain('application/json');
  });

  it('sets Content-Type header to application/json for not found', async () => {
    const res = await app.request('/does-not-exist');
    expect(res.headers.get('content-type')).toContain('application/json');
  });
});

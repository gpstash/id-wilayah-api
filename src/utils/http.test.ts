import type { Context } from 'hono';
import { describe, it, expect, vi } from 'vitest';
import type { CloudflareBindings } from '../types'; 
import { createErrorResponse, validateCodeParam, applyCacheHeaders } from './http';

// Strongly typed mock Context for Hono
function createMockContext(params: Record<string, string> = {}): Context<{ Bindings: CloudflareBindings }> {
  return {
    req: {
      param: (name: string) => params[name],
      path: '/test-path',
    },
    header: vi.fn(),
  } as unknown as Context<{ Bindings: CloudflareBindings }>;
}

describe('http utils', () => {
  it('createErrorResponse returns correct error structure', () => {
    const now = new Date();
    const error = createErrorResponse('Not found', 404, '/foo');
    expect(error.error).toBe('Not found');
    expect(error.status).toBe(404);
    expect(error.path).toBe('/foo');
    expect(new Date(error.timestamp).getTime()).toBeGreaterThanOrEqual(now.getTime());
  });

  it('createErrorResponse handles empty message and path', () => {
    const error = createErrorResponse('', 500, '');
    expect(error.error).toBe('');
    expect(error.status).toBe(500);
    expect(error.path).toBe('');
  });

  it('validateCodeParam returns true for valid param', () => {
    const ctx = createMockContext({ foo: 'bar' });
    expect(validateCodeParam(ctx, 'foo')).toBe(true);
  });

  it('validateCodeParam returns false for missing or empty param', () => {
    const ctx1 = createMockContext({});
    expect(validateCodeParam(ctx1, 'foo')).toBe(false);
    const ctx2 = createMockContext({ foo: '' });
    expect(validateCodeParam(ctx2, 'foo')).toBe(false);
    const ctx3 = createMockContext({ foo: '   ' });
    expect(validateCodeParam(ctx3, 'foo')).toBe(false);
  });

  it('validateCodeParam handles special characters', () => {
    const ctx = createMockContext({ foo: ' !@#$%^&*()_+ ' });
    expect(validateCodeParam(ctx, 'foo')).toBe(true);
  });

  it('applyCacheHeaders sets correct header', () => {
    const ctx = createMockContext();
    applyCacheHeaders(ctx, 123);
    expect(ctx.header).toHaveBeenCalledWith('Cache-Control', 'public, max-age=123');
  });

  it('applyCacheHeaders uses default maxAge', () => {
    const ctx = createMockContext();
    applyCacheHeaders(ctx);
    expect(ctx.header).toHaveBeenCalledWith('Cache-Control', 'public, max-age=86400');
  });
});

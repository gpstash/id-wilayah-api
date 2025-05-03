import type { Context } from 'hono';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import type { CloudflareBindings } from '../types'; 
import { createErrorResponse, validateCodeParam, applyCacheHeaders } from './http';

// Strongly typed mock Context for Hono
function createMockContext(params: Record<string, string> = {}, path: string = '/test-path'): Context<{ Bindings: CloudflareBindings }> {
  return {
    req: {
      param: (name: string) => params[name],
      path,
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
    
    // More robust timestamp check
    const errorTime = new Date(error.timestamp).getTime();
    const nowTime = now.getTime();
    expect(errorTime).toBeGreaterThanOrEqual(nowTime - 5); // Allow small buffer for execution time
    expect(errorTime).toBeLessThanOrEqual(nowTime + 1000); // Should not be in the future by more than a second
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

  describe('applyCacheHeaders', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-05-01'));
    });
    
    afterEach(() => {
      vi.useRealTimers();
    });

    it('sets correct cache headers for states endpoint', () => {
      const statesCtx = createMockContext({}, '/states');
      applyCacheHeaders(statesCtx);
      expect(statesCtx.header).toHaveBeenCalledWith('Cache-Control', 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=60');
      expect(statesCtx.header).toHaveBeenCalledWith('CDN-Cache-Control', 'max-age=604800');
    });
    
    it('sets correct cache headers for cities endpoint', () => {
      const citiesCtx = createMockContext({}, '/states/11/cities');
      applyCacheHeaders(citiesCtx);
      expect(citiesCtx.header).toHaveBeenCalledWith('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=60');
      expect(citiesCtx.header).toHaveBeenCalledWith('CDN-Cache-Control', 'max-age=86400');
    });
    
    it('sets default cache headers for unknown endpoints', () => {
      const unknownCtx = createMockContext({}, '/unknown');
      applyCacheHeaders(unknownCtx);
      expect(unknownCtx.header).toHaveBeenCalledWith('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60');
      expect(unknownCtx.header).toHaveBeenCalledWith('CDN-Cache-Control', 'max-age=3600');
    });
    
    it('sets all required headers', () => {
      const ctx = createMockContext();
      applyCacheHeaders(ctx);
      expect(ctx.header).toHaveBeenCalledWith('Vary', 'Accept');
      expect(ctx.header).toHaveBeenCalledWith('Accept-Encoding', 'gzip, deflate, br');
      
      // Use more flexible matching for the Expires header to avoid flaky tests
      expect(ctx.header).toHaveBeenCalledWith(
        'Expires',
        expect.stringMatching(/^Thu, 01 May 2025/),
      );
    });
  });
});

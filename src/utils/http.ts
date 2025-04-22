import type { Context } from 'hono';
import type { InvalidJSONValue, JSONValue } from 'hono/utils/types';
import type { ErrorResponse, CloudflareBindings } from '../types';

export const SUCCESS_MESSAGE = 'SUCCESS';

/**
 * Create a standardized error response
 */
export const createErrorResponse = (message: string, status: number, path: string): ErrorResponse => {
  return {
    error: message,
    status,
    timestamp: new Date().toISOString(),
    path,
  };
};

/**
 * Validate that a code parameter exists and is not empty
 */
export const validateCodeParam = (c: Context<{ Bindings: CloudflareBindings }>, paramName: string): boolean => {
  const code = c.req.param(paramName);
  return !!code && code.trim().length > 0;
};

/**
 * Apply cache headers for better performance
 */
export const applyCacheHeaders = (c: Context<{ Bindings: CloudflareBindings }>, maxAge = 86400): void => {
  c.header('Cache-Control', `public, max-age=${String(maxAge)}`);
};

export const createSuccessResponse = (data: JSONValue | {} | InvalidJSONValue) => {
  return {
    status: 200,
    message: SUCCESS_MESSAGE,
    data,
  };
};
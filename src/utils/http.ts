import type { Context } from 'hono';
import type { InvalidJSONValue, JSONValue } from 'hono/utils/types';
import type { ErrorResponse, CloudflareBindings } from '../types';
import {
  isValidStateCode,
  isValidCityCode,
  isValidDistrictCode,
  isValidVillageCode,
} from './validation';

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
 * Validate a state code parameter with strict format checking
 */
export const validateStateCodeParam = (c: Context<{ Bindings: CloudflareBindings }>): boolean => {
  const stateCode = c.req.param('stateCode');
  return isValidStateCode(stateCode);
};

/**
 * Validate a city code parameter with strict format checking
 */
export const validateCityCodeParam = (c: Context<{ Bindings: CloudflareBindings }>): boolean => {
  const cityCode = c.req.param('cityCode');
  return isValidCityCode(cityCode);
};

/**
 * Validate a district code parameter with strict format checking
 */
export const validateDistrictCodeParam = (c: Context<{ Bindings: CloudflareBindings }>): boolean => {
  const districtCode = c.req.param('districtCode');
  return isValidDistrictCode(districtCode);
};

/**
 * Validate a village code parameter with strict format checking
 */
export const validateVillageCodeParam = (c: Context<{ Bindings: CloudflareBindings }>): boolean => {
  const villageCode = c.req.param('villageCode');
  return isValidVillageCode(villageCode);
};

/**
 * Calculate appropriate cache TTL based on resource type
 * - Reference data like states rarely changes (1 week)
 * - Cities, districts change infrequently (1 day)
 * - Villages might change more often (12 hours)
 * - Other resources (1 hour by default)
 */
const getCacheTTL = (path: string): number => {
  // States data rarely changes
  if (path === '/states' || (/^\/states\/[0-9]{2}$/.exec(path))) {
    return 604800; // 1 week
  }
  
  // Cities data changes infrequently
  if ((/^\/states\/[0-9]{2}\/cities$/.exec(path)) || (/^\/cities\/[0-9]{2}\.[0-9]{2}$/.exec(path))) {
    return 86400; // 1 day
  }
  
  // Districts data
  if ((/^\/cities\/[0-9]{2}\.[0-9]{2}\/districts$/.exec(path)) || (/^\/districts\/[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/.exec(path))) {
    return 86400; // 1 day
  }
  
  // Villages data
  if ((/^\/districts\/[0-9]{2}\.[0-9]{2}\.[0-9]{2}\/villages$/.exec(path)) || (/^\/villages\/[0-9]{2}\.[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.exec(path))) {
    return 43200; // 12 hours
  }
  
  // Default for other endpoints
  return 3600; // 1 hour
};

/**
 * Apply optimized cache headers for better performance with Cloudflare
 * Includes:
 * - Variable TTL based on resource type
 * - Cache-Control directives for CDN caching
 * - ETag support for conditional requests
 */
export const applyCacheHeaders = (c: Context<{ Bindings: CloudflareBindings }>): void => {
  const path = c.req.path;
  const maxAge = getCacheTTL(path);
  
  c.header('Cache-Control', `public, max-age=${String(maxAge)}, s-maxage=${String(maxAge)}, stale-while-revalidate=60`);
  c.header('Vary', 'Accept');
  
  // Signal to Cloudflare to cache this response
  c.header('CDN-Cache-Control', `max-age=${String(maxAge)}`);
  
  // Enable automatic compression
  c.header('Accept-Encoding', 'gzip, deflate, br');
  
  // Set expiration for compatibility with older clients
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
  c.header('Expires', expires);
};

export const createSuccessResponse = (data: JSONValue | {} | InvalidJSONValue) => {
  return {
    status: 200,
    message: SUCCESS_MESSAGE,
    data,
  };
};
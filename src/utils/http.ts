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
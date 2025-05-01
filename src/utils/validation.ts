import { z } from 'zod';
import type { AddressNode } from '../types';

/**
 * Zod schema for runtime validation of address data
 */
export const AddressNodeSchema: z.ZodType<AddressNode> = z.lazy(() => z.object({
  value: z.string(),
  children: z.record(z.lazy(() => AddressNodeSchema)).optional(),
}));

export const AddressTreeSchema = z.record(AddressNodeSchema);

/**
 * Validates address data against the schema
 * @param data The address data to validate
 * @returns The validation result
 */
export function validateAddressData(data: unknown) {
  return AddressTreeSchema.safeParse(data);
}

// Regular expressions for validating address codes
export const STATE_CODE_REGEX = /^[0-9]{2}$/;
export const CITY_CODE_REGEX = /^[0-9]{2}\.[0-9]{2}$/;
export const DISTRICT_CODE_REGEX = /^[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/;
export const VILLAGE_CODE_REGEX = /^[0-9]{2}\.[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

/**
 * Validate a state code (e.g., "31")
 * @param code The state code to validate
 * @returns True if the code is valid, false otherwise
 */
export function isValidStateCode(code: string): boolean {
  return typeof code === 'string' && STATE_CODE_REGEX.test(code);
}

/**
 * Validate a city code (e.g., "31.74")
 * @param code The city code to validate
 * @returns True if the code is valid, false otherwise
 */
export function isValidCityCode(code: string): boolean {
  return typeof code === 'string' && CITY_CODE_REGEX.test(code);
}

/**
 * Validate a district code (e.g., "31.74.04")
 * @param code The district code to validate
 * @returns True if the code is valid, false otherwise
 */
export function isValidDistrictCode(code: string): boolean {
  return typeof code === 'string' && DISTRICT_CODE_REGEX.test(code);
}

/**
 * Validate a village code (e.g., "31.74.04.1001")
 * @param code The village code to validate
 * @returns True if the code is valid, false otherwise
 */
export function isValidVillageCode(code: string): boolean {
  return typeof code === 'string' && VILLAGE_CODE_REGEX.test(code);
}

/**
 * Extracts the state code portion from any address code
 * @param code City, district, or village code
 * @returns The state code if valid, null otherwise
 */
export function extractStateCode(code: string): string | null {
  if (!code || typeof code !== 'string') return null;
  
  if (isValidStateCode(code)) return code;
  
  const stateCode = code.split('.')[0];
  return isValidStateCode(stateCode) ? stateCode : null;
}

/**
 * Extracts the city code portion from a district or village code
 * @param code District or village code
 * @returns The city code if valid, null otherwise
 */
export function extractCityCode(code: string): string | null {
  if (!code || typeof code !== 'string') return null;
  
  if (isValidCityCode(code)) return code;
  
  const parts = code.split('.');
  if (parts.length >= 2) {
    const cityCode = `${parts[0]}.${parts[1]}`;
    return isValidCityCode(cityCode) ? cityCode : null;
  }
  
  return null;
}

/**
 * Extracts the district code portion from a village code
 * @param code Village code
 * @returns The district code if valid, null otherwise
 */
export function extractDistrictCode(code: string): string | null {
  if (!code || typeof code !== 'string') return null;
  
  if (isValidDistrictCode(code)) return code;
  
  const parts = code.split('.');
  if (parts.length >= 3) {
    const districtCode = `${parts[0]}.${parts[1]}.${parts[2]}`;
    return isValidDistrictCode(districtCode) ? districtCode : null;
  }
  
  return null;
}

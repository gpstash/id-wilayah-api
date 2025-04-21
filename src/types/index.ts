/**
 * Core address node structure
 */
export interface AddressNode {
  value: string;
  type: 'STATE' | 'CITY' | 'DISTRICT' | 'VILLAGE';
  children?: Record<string, AddressNode>;
}

/**
 * Standardized API response format
 */
export interface AddressResponse {
  code: string;
  value: string;
  type: string;
}

/**
 * Error response structure
 */
export interface ErrorResponse {
  error: string;
  status: number;
  timestamp: string;
  path?: string;
}

/**
 * Cloudflare Worker bindings
 */
export interface CloudflareBindings {}

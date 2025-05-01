/**
 * Core address node structure
 */
export interface AddressNode {
  value: string;
  children?: Record<string, AddressNode>;
}

/**
 * Standardized API response format
 */
export interface AddressResponse {
  code: string;
  value: string;
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
export interface CloudflareBindings extends Cloudflare.Env {
}

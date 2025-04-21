import { Hono } from 'hono';
import type { Context } from 'hono';
import { z } from 'zod';
import addressTree from './data/base.json';

// ==================== TYPES ====================

/**
 * Core address node structure
 */
interface AddressNode {
  value: string;
  type: 'State' | 'City' | 'District' | 'Village';
  children?: Record<string, AddressNode>;
}

/**
 * Standardized API response format
 */
interface AddressResponse {
  code: string;
  value: string;
  type: string;
}

/**
 * Error response structure
 */
interface ErrorResponse {
  error: string;
  status: number;
  timestamp: string;
  path?: string;
}

// ==================== VALIDATION ====================

/**
 * Zod schema for runtime validation of address data
 */
const AddressNodeSchema: z.ZodType<AddressNode> = z.lazy(() => z.object({
  value: z.string(),
  type: z.enum(['State', 'City', 'District', 'Village']),
  children: z.record(z.lazy(() => AddressNodeSchema)).optional(),
}));

const AddressTreeSchema = z.record(AddressNodeSchema);

// Validate the imported JSON at runtime
const parseResult = AddressTreeSchema.safeParse(addressTree);
if (!parseResult.success) {
  throw new Error(`Invalid address data structure: ${parseResult.error.message}`);
}

// ==================== DATA ACCESS LAYER ====================

/**
 * Address data service - encapsulates all data access operations
 * This separation makes the code more testable and maintainable
 */
class AddressService {
  private tree: Record<string, AddressNode>;
  
  constructor(data: Record<string, AddressNode>) {
    this.tree = data;
  }
  
  /**
   * Get all states/provinces
   */
  getAllStates(): AddressResponse[] {
    return Object.entries(this.tree).map(([code, state]) => ({
      code,
      value: state.value,
      type: state.type,
    }));
  }
  
  /**
   * Get a state by its code
   */
  getState(stateCode: string): AddressNode | undefined {
    return this.tree[stateCode];
  }
  
  /**
   * Get all cities in a state
   */
  getCitiesInState(stateCode: string): AddressResponse[] | null {
    const state = this.getState(stateCode);
    if (!state?.children) return null;
    
    return Object.entries(state.children).map(([code, city]) => ({
      code,
      value: city.value,
      type: city.type,
    }));
  }
  
  /**
   * Find a city by its code (searches across all states)
   */
  findCity(cityCode: string): { city: AddressNode; state: AddressNode } | null {
    for (const state of Object.values(this.tree)) {
      if (!state.children) continue;
      
      const city = state.children[cityCode] as AddressNode | undefined;
      if (city) {
        return { city, state };
      }
    }
    return null;
  }
  
  /**
   * Get all districts in a city
   */
  getDistrictsInCity(cityCode: string): AddressResponse[] | null {
    const result = this.findCity(cityCode);
    if (!result?.city.children) return null;
    
    return Object.entries(result.city.children).map(([code, district]) => ({
      code,
      value: district.value,
      type: district.type,
    }));
  }
  
  /**
   * Find a district by its code (searches across all cities)
   */
  findDistrict(districtCode: string): { district: AddressNode; city: AddressNode; state: AddressNode } | null {
    for (const state of Object.values(this.tree)) {
      if (!state.children) continue;
      
      for (const city of Object.values(state.children)) {
        if (!city.children) continue;
        
        const district = city.children[districtCode] as AddressNode | undefined;
        if (district) {
          return { district, city, state };
        }
      }
    }
    return null;
  }
  
  /**
   * Get all villages in a district
   */
  getVillagesInDistrict(districtCode: string): AddressResponse[] | null {
    const result = this.findDistrict(districtCode);
    if (!result?.district.children) return null;
    
    return Object.entries(result.district.children).map(([code, village]) => ({
      code,
      value: village.value,
      type: village.type,
    }));
  }
}

// Initialize the address service with validated data
const addressService = new AddressService(parseResult.data);

// ==================== UTILITY FUNCTIONS ====================

/**
 * Create a standardized error response
 */
const createErrorResponse = (message: string, status: number, path: string): ErrorResponse => {
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
const validateCodeParam = (c: Context<{ Bindings: CloudflareBindings }>, paramName: string): boolean => {
  const code = c.req.param(paramName);
  return !!code && code.trim().length > 0;
};

/**
 * Apply cache headers for better performance
 */
const applyCacheHeaders = (c: Context<{ Bindings: CloudflareBindings }>, maxAge = 86400): void => {
  c.header('Cache-Control', `public, max-age=${String(maxAge)}`);
};

// ==================== API ROUTES ====================

// Create Hono app
const app = new Hono<{ Bindings: CloudflareBindings }>();

// Global error handler
app.onError((err, c) => {
  console.error(`Error: ${err.message}`);
  const errorResponse: ErrorResponse = {
    error: 'Internal server error',
    status: 500,
    timestamp: new Date().toISOString(),
    path: c.req.path,
  };
  return c.json(errorResponse, 500);
});

// Not found handler
app.notFound((c) => {
  const errorResponse: ErrorResponse = {
    error: 'Resource not found',
    status: 404,
    timestamp: new Date().toISOString(),
    path: c.req.path,
  };
  return c.json(errorResponse, 404);
});

/**
 * Get all states/provinces
 * @returns Array of state objects with code, value and type
 */
app.get('/states', (c) => {
  try {
    const states = addressService.getAllStates();
    applyCacheHeaders(c);
    return c.json(states);
  } catch (error) {
    console.error('Error fetching states:', error);
    return c.json(createErrorResponse('Failed to fetch states', 500, c.req.path), 500);
  }
});

/**
 * Get cities by state code
 * @param stateCode - The state code
 * @returns Array of city objects with code, value and type or 404 if state not found
 */
app.get('/states/:stateCode/cities', (c) => {
  try {
    const stateCode = c.req.param('stateCode');
    
    // Validate state code parameter
    if (!validateCodeParam(c, 'stateCode')) {
      return c.json(
        createErrorResponse('State code is required', 400, c.req.path),
        400,
      );
    }
    
    // Check if state exists
    const state = addressService.getState(stateCode);
    if (!state) {
      return c.json(
        createErrorResponse(`State with code '${stateCode}' not found`, 404, c.req.path),
        404,
      );
    }
    
    // Get cities in state
    const cities = addressService.getCitiesInState(stateCode);
    applyCacheHeaders(c);
    return c.json(cities ?? []);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return c.json(createErrorResponse('Failed to fetch cities', 500, c.req.path), 500);
  }
});

/**
 * Get districts by city code
 * @param cityCode - The city code
 * @returns Array of district objects with code, value and type or 404 if city not found
 */
app.get('/cities/:cityCode/districts', (c) => {
  try {
    const cityCode = c.req.param('cityCode');
    
    // Validate city code parameter
    if (!validateCodeParam(c, 'cityCode')) {
      return c.json(
        createErrorResponse('City code is required', 400, c.req.path),
        400,
      );
    }
    
    // Get districts in city
    const districts = addressService.getDistrictsInCity(cityCode);
    
    // If null, city was not found
    if (districts === null) {
      return c.json(
        createErrorResponse(`City with code '${cityCode}' not found`, 404, c.req.path),
        404,
      );
    }
    
    applyCacheHeaders(c);
    return c.json(districts);
  } catch (error) {
    console.error('Error fetching districts:', error);
    return c.json(createErrorResponse('Failed to fetch districts', 500, c.req.path), 500);
  }
});

/**
 * Get villages by district code
 * @param districtCode - The district code
 * @returns Array of village objects with code, value and type or 404 if district not found
 */
app.get('/districts/:districtCode/villages', (c) => {
  try {
    const districtCode = c.req.param('districtCode');
    
    // Validate district code parameter
    if (!validateCodeParam(c, 'districtCode')) {
      return c.json(
        createErrorResponse('District code is required', 400, c.req.path),
        400,
      );
    }
    
    // Get villages in district
    const villages = addressService.getVillagesInDistrict(districtCode);
    
    // If null, district was not found
    if (villages === null) {
      return c.json(
        createErrorResponse(`District with code '${districtCode}' not found`, 404, c.req.path),
        404,
      );
    }
    
    applyCacheHeaders(c);
    return c.json(villages);
  } catch (error) {
    console.error('Error fetching villages:', error);
    return c.json(createErrorResponse('Failed to fetch villages', 500, c.req.path), 500);
  }
});

/**
 * Health check endpoint
 * @returns Status information about the API
 */
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

export default app;

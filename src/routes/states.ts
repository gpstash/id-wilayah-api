import { Hono } from 'hono';
import type { AddressService } from '../services/AddressService';
import { applyCacheHeaders, createErrorResponse, validateCodeParam } from '../utils/http';

/**
 * Creates state-related routes
 * @param addressService The address service instance
 * @returns Hono router with state routes
 */
export function createStateRoutes(addressService: AddressService) {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  /**
   * Get all states/provinces
   * @returns Array of state objects with code, value and type
   */
  router.get('/', (c) => {
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
  router.get('/:stateCode/cities', (c) => {
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

  return router;
}

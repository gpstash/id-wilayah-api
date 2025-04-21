import { Hono } from 'hono';
import type { AddressService } from '../services/AddressService';
import { applyCacheHeaders, createErrorResponse, validateCodeParam } from '../utils/http';

/**
 * Creates city-related routes
 * @param addressService The address service instance
 * @returns Hono router with city routes
 */
export function createCityRoutes(addressService: AddressService) {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  /**
   * Get districts by city code
   * @param cityCode - The city code
   * @returns Array of district objects with code, value and type or 404 if city not found
   */
  router.get('/:cityCode/districts', (c) => {
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

  return router;
}

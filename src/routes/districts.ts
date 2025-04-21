import { Hono } from 'hono';
import type { AddressService } from '../services/AddressService';
import { applyCacheHeaders, createErrorResponse, validateCodeParam } from '../utils/http';

/**
 * Creates district-related routes
 * @param addressService The address service instance
 * @returns Hono router with district routes
 */
export function createDistrictRoutes(addressService: AddressService) {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  /**
   * Get villages by district code
   * @param districtCode - The district code
   * @returns Array of village objects with code, value and type or 404 if district not found
   */
  router.get('/:districtCode/villages', (c) => {
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

  return router;
}

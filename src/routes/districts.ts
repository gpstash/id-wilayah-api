import { Hono } from 'hono';
import type { Context } from 'hono';
import { addressService } from '../services';
import type { CloudflareBindings } from '../types';
import { 
  applyCacheHeaders,
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateDistrictCodeParam, 
} from '../utils/http';

export function createDistrictRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:districtCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'districtCode')) {
        return c.json(createErrorResponse('District code is required', 400, c.req.path), 400);
      }
      
      if (!validateDistrictCodeParam(c)) {
        return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
      }
      
      const districtCode = c.req.param('districtCode');
      
      // Additional input validation
      if (districtCode !== districtCode.replace(/[^0-9.]/g, '')) {
        return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
      }
      
      const district = await addressService.getDistrict(districtCode);
      if (!district) {
        return c.json(createErrorResponse('District not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(district));
    } catch (error) {
      console.error('Error getting district:', error);
      return c.json(
        createErrorResponse('Error getting district', 500, c.req.path),
        500,
      );
    }
  });

  router.get('/:districtCode/villages', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'districtCode')) {
        return c.json(createErrorResponse('District code is required', 400, c.req.path), 400);
      }
      
      if (!validateDistrictCodeParam(c)) {
        return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
      }
      
      const districtCode = c.req.param('districtCode');
      
      // Additional input validation
      if (districtCode !== districtCode.replace(/[^0-9.]/g, '')) {
        return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
      }
      
      const villages = await addressService.getVillagesInDistrict(districtCode);
      if (!villages) {
        return c.json(createErrorResponse('District not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(villages));
    } catch (error) {
      console.error('Error getting villages:', error);
      return c.json(
        createErrorResponse('Error getting villages', 500, c.req.path),
        500,
      );
    }
  });

  return router;
}

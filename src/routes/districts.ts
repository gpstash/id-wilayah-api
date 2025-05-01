import { Hono } from 'hono';
import type { Context } from 'hono';
import { addressService } from '../services';
import type { CloudflareBindings } from '../types';
import { 
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateDistrictCodeParam, 
} from '../utils/http';

export function createDistrictRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:districtCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'districtCode')) {
      return c.json(createErrorResponse('District code is required', 400, c.req.path), 400);
    }
    
    if (!validateDistrictCodeParam(c)) {
      return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
    }
    
    const districtCode = c.req.param('districtCode');
    const district = await addressService.getDistrict(districtCode);
    if (!district) {
      return c.json(createErrorResponse('District not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(district));
  });

  router.get('/:districtCode/villages', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'districtCode')) {
      return c.json(createErrorResponse('District code is required', 400, c.req.path), 400);
    }
    
    if (!validateDistrictCodeParam(c)) {
      return c.json(createErrorResponse('Invalid district code format', 400, c.req.path), 400);
    }
    
    const districtCode = c.req.param('districtCode');
    const villages = await addressService.getVillagesInDistrict(districtCode);
    if (!villages) {
      return c.json(createErrorResponse('District not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(villages));
  });

  return router;
}

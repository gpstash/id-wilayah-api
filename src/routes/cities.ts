import { Hono } from 'hono';
import type { Context } from 'hono';
import { addressService } from '../services'; 
import type { CloudflareBindings } from '../types';
import { 
  applyCacheHeaders,
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateCityCodeParam,
} from '../utils/http';

export function createCityRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:cityCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'cityCode')) {
        return c.json(createErrorResponse('City code is required', 400, c.req.path), 400);
      }
      
      if (!validateCityCodeParam(c)) {
        return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
      }
      
      const cityCode = c.req.param('cityCode');
      
      // Additional input validation
      if (cityCode !== cityCode.replace(/[^0-9.]/g, '')) {
        return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
      }
      
      const city = await addressService.getCity(cityCode);
      if (!city) {
        return c.json(createErrorResponse('City not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(city));
    } catch (error) {
      console.error('Error getting city:', error);
      return c.json(
        createErrorResponse('Error getting city', 500, c.req.path),
        500,
      );
    }
  });

  router.get('/:cityCode/districts', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'cityCode')) {
        return c.json(createErrorResponse('City code is required', 400, c.req.path), 400);
      }
      
      if (!validateCityCodeParam(c)) {
        return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
      }
      
      const cityCode = c.req.param('cityCode');
      
      // Additional input validation
      if (cityCode !== cityCode.replace(/[^0-9.]/g, '')) {
        return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
      }
      
      const districts = await addressService.getDistrictsInCity(cityCode);
      if (!districts) {
        return c.json(createErrorResponse('City not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(districts));
    } catch (error) {
      console.error('Error getting districts:', error);
      return c.json(
        createErrorResponse('Error getting districts', 500, c.req.path),
        500,
      );
    }
  });

  return router;
}

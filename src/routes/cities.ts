import { Hono } from 'hono';
import type { Context } from 'hono';
import type { CloudflareBindings } from '../types';
import { addressService } from '../services';
import { 
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateCityCodeParam
} from '../utils/http';

export function createCityRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:cityCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'cityCode')) {
      return c.json(createErrorResponse('City code is required', 400, c.req.path), 400);
    }
    
    if (!validateCityCodeParam(c)) {
      return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
    }
    
    const cityCode = c.req.param('cityCode');
    const city = await addressService.getCity(cityCode);
    if (!city) {
      return c.json(createErrorResponse('City not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(city));
  });

  router.get('/:cityCode/districts', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'cityCode')) {
      return c.json(createErrorResponse('City code is required', 400, c.req.path), 400);
    }
    
    if (!validateCityCodeParam(c)) {
      return c.json(createErrorResponse('Invalid city code format', 400, c.req.path), 400);
    }
    
    const cityCode = c.req.param('cityCode');
    const districts = await addressService.getDistrictsInCity(cityCode);
    if (!districts) {
      return c.json(createErrorResponse('City not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(districts));
  });

  return router;
}

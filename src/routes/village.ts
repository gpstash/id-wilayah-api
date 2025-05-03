import { Hono } from 'hono';
import type { Context } from 'hono';
import { addressService } from '../services';
import type { CloudflareBindings } from '../types';
import { 
  applyCacheHeaders,
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateVillageCodeParam,
} from '../utils/http';

export function createVillageRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  router.get('/:villageCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'villageCode')) {
        return c.json(createErrorResponse('Village code is required', 400, c.req.path), 400);
      }
      
      if (!validateVillageCodeParam(c)) {
        return c.json(createErrorResponse('Invalid village code format', 400, c.req.path), 400);
      }
      
      const villageCode = c.req.param('villageCode');
      
      // Additional input validation
      if (villageCode !== villageCode.replace(/[^0-9.]/g, '')) {
        return c.json(createErrorResponse('Invalid village code format', 400, c.req.path), 400);
      }
      
      const village = await addressService.getVillage(villageCode);
      if (!village) {
        return c.json(createErrorResponse('Village not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(village));
    } catch (error) {
      console.error('Error getting village:', error);
      return c.json(
        createErrorResponse('Error getting village', 500, c.req.path),
        500,
      );
    }
  });

  return router;
}


import { Hono } from 'hono';
import type { Context } from 'hono';
import type { CloudflareBindings } from '../types';
import { addressService } from '../services';
import { 
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateVillageCodeParam
} from '../utils/http';

export function createVillageRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  router.get('/:villageCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'villageCode')) {
      return c.json(createErrorResponse('Village code is required', 400, c.req.path), 400);
    }
    
    if (!validateVillageCodeParam(c)) {
      return c.json(createErrorResponse('Invalid village code format', 400, c.req.path), 400);
    }
    
    const villageCode = c.req.param('villageCode');
    const village = await addressService.getVillage(villageCode);
    if (!village) {
      return c.json(createErrorResponse('Village not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(village));
  });

  return router;
}


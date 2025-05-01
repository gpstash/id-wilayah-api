import { Hono } from 'hono';
import type { Context } from 'hono';
import { addressService } from '../services';
import type { CloudflareBindings } from '../types';
import { 
  applyCacheHeaders, 
  createErrorResponse, 
  createSuccessResponse, 
  validateCodeParam,
  validateStateCodeParam,
} from '../utils/http'; 

export function createStateRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  router.get('/', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    applyCacheHeaders(c);
    const states = await addressService.getAllStates();
    return c.json(createSuccessResponse(states));
  });

  router.get('/:stateCode/cities', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'stateCode')) {
      return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
    }
    
    if (!validateStateCodeParam(c)) {
      return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
    }
    
    const stateCode = c.req.param('stateCode');
    const cities = await addressService.getCitiesInState(stateCode);
    if (!cities) {
      return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(cities));
  });

  router.get('/:stateCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    if (!validateCodeParam(c, 'stateCode')) {
      return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
    }
    
    if (!validateStateCodeParam(c)) {
      return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
    }
    
    const stateCode = c.req.param('stateCode');
    const state = await addressService.getState(stateCode);
    if (!state) {
      return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
    }
    
    return c.json(createSuccessResponse(state));
  });

  return router;
}

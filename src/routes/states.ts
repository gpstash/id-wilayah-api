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
    try {
      applyCacheHeaders(c);
      const states = await addressService.getAllStates();
      return c.json(createSuccessResponse(states));
    } catch (error) {
      console.error('Error getting states:', error);
      return c.json(
        createErrorResponse('Error getting states', 500, c.req.path),
        500,
      );
    }
  });

  router.get('/:stateCode/cities', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'stateCode')) {
        return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
      }
      
      if (!validateStateCodeParam(c)) {
        return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
      }
      
      const stateCode = c.req.param('stateCode');
      
      // Additional input validation
      if (stateCode !== stateCode.replace(/[^0-9]/g, '')) {
        return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
      }
      
      const cities = await addressService.getCitiesInState(stateCode);
      if (!cities) {
        return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(cities));
    } catch (error) {
      console.error('Error getting cities for state:', error);
      return c.json(
        createErrorResponse('Error getting cities', 500, c.req.path),
        500,
      );
    }
  });

  router.get('/:stateCode', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    try {
      if (!validateCodeParam(c, 'stateCode')) {
        return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
      }
      
      if (!validateStateCodeParam(c)) {
        return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
      }
      
      const stateCode = c.req.param('stateCode');
      
      // Additional input validation
      if (stateCode !== stateCode.replace(/[^0-9]/g, '')) {
        return c.json(createErrorResponse('Invalid state code format', 400, c.req.path), 400);
      }
      
      const state = await addressService.getState(stateCode);
      if (!state) {
        return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
      }
      
      applyCacheHeaders(c);
      return c.json(createSuccessResponse(state));
    } catch (error) {
      console.error('Error getting state:', error);
      return c.json(
        createErrorResponse('Error getting state', 500, c.req.path),
        500,
      );
    }
  });

  return router;
}

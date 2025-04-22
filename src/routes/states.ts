import { Hono } from 'hono';
import type { Context } from 'hono';
import type { JSONValue } from 'hono/utils/types';
import type { CloudflareBindings } from '../types';
import { applyCacheHeaders, createErrorResponse, createSuccessResponse, validateCodeParam } from '../utils/http';

export function createStateRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  router.get('/', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    applyCacheHeaders(c);
    const mod = await import('../data/states.json');
    return c.json(createSuccessResponse(mod.default));
  });

  router.get('/:stateCode/cities', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    const stateCode = c.req.param('stateCode');
    if (!validateCodeParam(c, 'stateCode')) {
      return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mod = await import(`../data/cities/${stateCode}.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return c.json(createSuccessResponse(mod.default as JSONValue | {}));
    } catch {
      return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
    }
  });

  return router;
}

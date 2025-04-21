import { Hono } from 'hono';
import { applyCacheHeaders, createErrorResponse, validateCodeParam } from '../utils/http';

export function createStateRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  router.get('/', async (c) => {
    applyCacheHeaders(c);
    const mod = await import('../data/states.json');
    return c.json(mod.default);
  });

  router.get('/:stateCode/cities', async (c) => {
    const stateCode = c.req.param('stateCode');
    if (!validateCodeParam(c, 'stateCode')) {
      return c.json(createErrorResponse('State code is required', 400, c.req.path), 400);
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mod = await import(`../data/cities/${stateCode}.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return c.json(mod.default);
    } catch {
      return c.json(createErrorResponse('State not found', 404, c.req.path), 404);
    }
  });

  return router;
}

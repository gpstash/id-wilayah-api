import { Hono } from 'hono';
import { createErrorResponse, validateCodeParam } from '../utils/http';

export function createCityRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:cityCode/districts', async (c) => {
    const cityCode = c.req.param('cityCode');
    if (!validateCodeParam(c, 'cityCode')) {
      return c.json(createErrorResponse('City code is required', 400, c.req.path), 400);
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mod = await import(`../data/districts/${cityCode}.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return c.json(mod.default);
    } catch {
      return c.json(createErrorResponse('City not found', 404, c.req.path), 404);
    }
  });

  return router;
}

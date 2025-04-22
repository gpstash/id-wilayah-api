import { Hono } from 'hono';
import type { Context } from 'hono';
import type { JSONValue } from 'hono/utils/types';
import type { CloudflareBindings } from '../types';
import { createErrorResponse, createSuccessResponse, validateCodeParam } from '../utils/http';

export function createDistrictRoutes(): Hono<{ Bindings: CloudflareBindings }> {
  const router = new Hono<{Bindings: CloudflareBindings}>();

  router.get('/:districtCode/villages', async (c: Context<{ Bindings: CloudflareBindings }>) => {
    const districtCode = c.req.param('districtCode');
    if (!validateCodeParam(c, 'districtCode')) {
      return c.json(createErrorResponse('District code is required', 400, c.req.path), 400);
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const mod = await import(`../data/villages/${districtCode}.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return c.json(createSuccessResponse(mod.default as JSONValue | {}));
    } catch {
      return c.json(createErrorResponse('District not found', 404, c.req.path), 404);
    }
  });

  return router;
}

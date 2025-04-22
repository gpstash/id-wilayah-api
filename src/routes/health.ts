import { Hono } from 'hono';
import type { CloudflareBindings } from '../types';
import { createSuccessResponse } from '../utils/http';

/**
 * Creates health check route
 * @returns Hono router with health check endpoint
 */
export function createHealthRoute() {
  const router = new Hono<{ Bindings: CloudflareBindings }>();

  /**
   * Health check endpoint
   * @returns Status information about the API
   */
  router.get('/', (c) => {
    return c.json(createSuccessResponse({
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    }));
  });

  return router;
}

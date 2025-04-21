import { Hono } from 'hono';

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
    return c.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    });
  });

  return router;
}

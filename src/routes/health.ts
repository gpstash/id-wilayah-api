import { Hono } from 'hono';
import type { CloudflareBindings } from '../types';
import { createSuccessResponse, createErrorResponse } from '../utils/http';

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
    try {
      // Health check endpoints should have minimal caching
      c.header('Cache-Control', 'no-cache, no-store, must-revalidate');
      c.header('Pragma', 'no-cache');
      c.header('Expires', '0');
      
      return c.json(createSuccessResponse({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      }));
    } catch (error) {
      console.error('Error in health check:', error);
      return c.json(
        createErrorResponse('Error checking system health', 500, c.req.path),
        500,
      );
    }
  });

  return router;
}

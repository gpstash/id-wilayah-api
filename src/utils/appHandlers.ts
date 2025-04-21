import type { Hono } from 'hono';
import type { ErrorResponse, CloudflareBindings } from '../types';

export function applyGlobalHandlers(app: Hono<{Bindings: CloudflareBindings}>) {
  app.onError((err, c) => {
    console.error(`Error: ${err.message}`);
    const errorResponse: ErrorResponse = {
      error: 'Internal server error',
      status: 500,
      timestamp: new Date().toISOString(),
      path: c.req.path,
    };
    c.header('Content-Type', 'application/json');
    return c.json(errorResponse, 500);
  });

  app.notFound((c) => {
    c.header('Content-Type', 'application/json');
    const errorResponse: ErrorResponse = {
      error: 'Resource not found',
      status: 404,
      timestamp: new Date().toISOString(),
      path: c.req.path,
    };
    return c.json(errorResponse, 404);
  });
}

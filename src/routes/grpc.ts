import { Hono } from 'hono';
import { grpcHandler } from '../services';
import type { CloudflareBindings } from '../types';

/**
 * Creates routes for handling gRPC requests
 * Listens on a separate endpoint for gRPC traffic
 * @returns Hono app with gRPC routes configured
 */
export function createGrpcRoutes(): Hono<{Bindings: CloudflareBindings}> {
  const app = new Hono<{Bindings: CloudflareBindings}>();
  
  // Handle all gRPC methods
  // This pattern matches any gRPC method in the address service
  app.all('/:method', async (c) => {
    return await grpcHandler.handleRequest(c.req.raw);
  });
  
  return app;
} 
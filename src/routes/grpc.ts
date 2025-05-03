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
    try {
      return await grpcHandler.handleRequest(c.req.raw);
    } catch (error) {
      console.error('Unhandled error in gRPC handler:', error);
      // Return a proper gRPC error response
      return new Response(JSON.stringify({
        error: 'Internal server error in gRPC handler',
        status: 500,
        timestamp: new Date().toISOString(),
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'grpc-status': '13', // INTERNAL error code in gRPC
          'grpc-message': 'Internal server error',
        },
      });
    }
  });
  
  return app;
} 
/**
 * Lokaid - Indonesian Address API
 * Supports both REST and gRPC interfaces
 * 
 * REST API available at: https://lokaid.gilangpratama.id/
 * gRPC API available at: https://lokaid.gilangpratama.id/grpc/
 */

import { Hono } from 'hono';
import { createRoutes } from './routes';
import { applyGlobalHandlers } from './utils/appHandlers';

// Create the main application
const app = new Hono<{ Bindings: CloudflareBindings }>();

// Apply global error handlers
applyGlobalHandlers(app);

// Register all routes
app.route('', createRoutes());

// Export the worker handler
export default {
  // The fetch handler is called for every request
  async fetch(request: Request, env: CloudflareBindings, ctx: ExecutionContext): Promise<Response> {
    // Allow Cloudflare to handle OPTIONS requests for CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Process the request through the Hono app
    return app.fetch(request, env, ctx);
  },
};

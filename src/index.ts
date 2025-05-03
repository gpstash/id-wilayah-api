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

// Security headers middleware
app.use('*', async (c, next) => {
  // Wait for the downstream middleware to complete
  await next();
  
  // Add security headers to all responses
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('X-Frame-Options', 'DENY');
  c.header('X-XSS-Protection', '1; mode=block');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
});

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
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        },
      });
    }

    // Apply basic rate limiting based on client IP
    const clientIP = request.headers.get('CF-Connecting-IP') ?? '';
    
    // Generate a key that includes the IP but also has a time window component
    // This creates a 1-minute window for rate limiting
    const minute = Math.floor(Date.now() / 60000).toString();
    const rateLimitKey = `${clientIP}:${minute}`;
    
    // Check rate using CF Cache API - efficient way to implement rate limiting in Workers
    const cache = caches.default;
    const rateLimitResponse = await cache.match(`https://lokaid-internal/ratelimit/${rateLimitKey}`);
    let currentCount = 0;
    
    if (rateLimitResponse) {
      currentCount = parseInt(await rateLimitResponse.text(), 10);
    }
    
    // 240 requests per minute (4 per second) seems reasonable for this API
    if (currentCount > 240) {
      return new Response(JSON.stringify({
        error: 'Too many requests',
        status: 429,
        timestamp: new Date().toISOString(),
        path: new URL(request.url).pathname,
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Cache-Control': 'no-store',
        },
      });
    }
    
    // Increment rate limit counter in cache
    ctx.waitUntil(
      cache.put(
        `https://lokaid-internal/ratelimit/${rateLimitKey}`,
        new Response(String(currentCount + 1), {
          headers: {
            // Cache for 1 minute (the window size)
            'Cache-Control': 'public, max-age=60',
          },
        }),
      ),
    );

    // Process the request through the Hono app
    return app.fetch(request, env, ctx);
  },
};

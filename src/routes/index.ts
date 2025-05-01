import { Hono } from 'hono';
import { createCityRoutes } from './cities';
import { createDistrictRoutes } from './districts';
import { createGrpcRoutes } from './grpc';
import { createHealthRoute } from './health';
import { createStateRoutes } from './states';
import { createVillageRoutes } from './village';

/**
 * Creates all application routes
 * @returns Hono app with all routes configured
 */
export function createRoutes(): Hono<{Bindings: CloudflareBindings}> {
  const app = new Hono<{Bindings: CloudflareBindings}>();
  
  // Register REST API routes
  app.route('/states', createStateRoutes());
  app.route('/cities', createCityRoutes());
  app.route('/districts', createDistrictRoutes());
  app.route('/villages', createVillageRoutes());
  app.route('/health', createHealthRoute());
  
  // Register gRPC routes
  app.route('/grpc', createGrpcRoutes());
  
  return app;
}

export { createGrpcRoutes };

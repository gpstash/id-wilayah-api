import { Hono } from 'hono';
import { createCityRoutes } from './cities';
import { createDistrictRoutes } from './districts';
import { createHealthRoute } from './health';
import { createStateRoutes } from './states';

/**
 * Creates all application routes
 * @returns Hono app with all routes configured
 */
export function createRoutes() {
  const app = new Hono<{Bindings: CloudflareBindings}>();
  
  // Register routes
  app.route('/states', createStateRoutes());
  app.route('/cities', createCityRoutes());
  app.route('/districts', createDistrictRoutes());
  app.route('/health', createHealthRoute());
  
  return app;
}

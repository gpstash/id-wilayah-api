import { Hono } from 'hono';
import type { AddressService } from '../services/AddressService';
import { createCityRoutes } from './cities';
import { createDistrictRoutes } from './districts';
import { createHealthRoute } from './health';
import { createStateRoutes } from './states';

/**
 * Creates all application routes
 * @param addressService The address service instance
 * @returns Hono app with all routes configured
 */
export function createRoutes(addressService: AddressService) {
  const app = new Hono<{Bindings: CloudflareBindings}>();
  
  // Register routes
  app.route('/states', createStateRoutes(addressService));
  app.route('/cities', createCityRoutes(addressService));
  app.route('/districts', createDistrictRoutes(addressService));
  app.route('/health', createHealthRoute());
  
  return app;
}

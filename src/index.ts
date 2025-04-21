import { Hono } from 'hono';
import addressTree from './data/base.json';
import { createRoutes } from './routes';
import { AddressService } from './services/AddressService';
import type { ErrorResponse } from './types';
import { validateAddressData } from './utils/validation';

// ==================== DATA VALIDATION ====================

// Validate the imported JSON at runtime
const parseResult = validateAddressData(addressTree);
if (!parseResult.success) {
  throw new Error(`Invalid address data structure: ${parseResult.error.message}`);
}

// ==================== APP INITIALIZATION ====================

// Initialize the address service with validated data
const addressService = new AddressService(parseResult.data);

// Create Hono app
const app = new Hono<{ Bindings: CloudflareBindings }>();

// ==================== ERROR HANDLING ====================

// Global error handler
app.onError((err, c) => {
  console.error(`Error: ${err.message}`);
  const errorResponse: ErrorResponse = {
    error: 'Internal server error',
    status: 500,
    timestamp: new Date().toISOString(),
    path: c.req.path,
  };
  return c.json(errorResponse, 500);
});

// Not found handler
app.notFound((c) => {
  const errorResponse: ErrorResponse = {
    error: 'Resource not found',
    status: 404,
    timestamp: new Date().toISOString(),
    path: c.req.path,
  };
  return c.json(errorResponse, 404);
});

// ==================== REGISTER ROUTES ====================

// Mount all routes
app.route('', createRoutes(addressService));

export default app;

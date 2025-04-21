import { Hono } from 'hono';
import addressTree from './data/base.json';
import { createRoutes } from './routes';
import { AddressService } from './services/AddressService';
import { applyGlobalHandlers } from './utils/appHandlers';
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

// Attach global error and not found handlers
applyGlobalHandlers(app);

// ==================== REGISTER ROUTES ====================

// Mount all routes
app.route('', createRoutes(addressService));

export default app;

import { AddressService } from './AddressService';

// Create a singleton instance of AddressService to be used throughout the application
export const addressService = new AddressService();

// Export the service class for testing and extension
export { AddressService }; 
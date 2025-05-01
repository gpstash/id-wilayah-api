import { AddressService } from './AddressService';
import { GrpcAddressService } from './GrpcAddressService';
import { GrpcHandler } from './GrpcHandler';

// Create singleton instances of services to be used throughout the application
export const addressService = new AddressService();
export const grpcAddressService = new GrpcAddressService();
export const grpcHandler = new GrpcHandler();

// Export the service classes for testing and extension
export { AddressService, GrpcAddressService, GrpcHandler }; 

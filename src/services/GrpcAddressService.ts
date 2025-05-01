import { AddressService } from '.';

// This class implements the gRPC service interface for the Address Service
// It's designed to work with Cloudflare Workers and protobuf-ts
export class GrpcAddressService {
  private addressService: AddressService;

  constructor() {
    this.addressService = new AddressService();
  }

  /**
   * Get all states/provinces
   */
  async getAllStates() {
    try {
      const states = await this.addressService.getAllStates();
      return {
        states,
      };
    } catch (error) {
      console.error('gRPC error in getAllStates:', error);
      throw error;
    }
  }

  /**
   * Get a specific state by its code
   */
  async getState(request: { state_code: string }) {
    try {
      const state = await this.addressService.getState(request.state_code.toString());
      if (!state) {
        throw new Error(`State with code ${request.state_code} not found`);
      }
      return {
        state: {
          code: state.code,
          value: state.value,
        },
      };
    } catch (error) {
      console.error(`gRPC error in getState for ${request.state_code}:`, error);
      throw error;
    }
  }

  /**
   * Get all cities in a state
   */
  async getCitiesInState(request: { state_code: string }) {
    try {
      const cities = await this.addressService.getCitiesInState(request.state_code);
      if (!cities) {
        throw new Error(`Cities for state code ${request.state_code} not found`);
      }
      return {
        cities: cities.map(city => ({
          code: city.code,
          value: city.value,
        })),
      };
    } catch (error) {
      console.error(`gRPC error in getCitiesInState for ${request.state_code}:`, error);
      throw error;
    }
  }

  /**
   * Get a specific city by its code
   */
  async getCity(request: { city_code: string }) {
    try {
      const city = await this.addressService.getCity(request.city_code);
      if (!city) {
        throw new Error(`City with code ${request.city_code} not found`);
      }
      return {
        city: {
          code: city.code,
          value: city.value,
        },
      };
    } catch (error) {
      console.error(`gRPC error in getCity for ${request.city_code}:`, error);
      throw error;
    }
  }

  /**
   * Get all districts in a city
   */
  async getDistrictsInCity(request: { city_code: string }) {
    try {
      const districts = await this.addressService.getDistrictsInCity(request.city_code);
      if (!districts) {
        throw new Error(`Districts for city code ${request.city_code} not found`);
      }
      return {
        districts: districts.map(district => ({
          code: district.code,
          value: district.value,
        })),
      };
    } catch (error) {
      console.error(`gRPC error in getDistrictsInCity for ${request.city_code}:`, error);
      throw error;
    }
  }

  /**
   * Get a specific district by its code
   */
  async getDistrict(request: { district_code: string }) {
    try {
      const district = await this.addressService.getDistrict(request.district_code);
      if (!district) {
        throw new Error(`District with code ${request.district_code} not found`);
      }
      return {
        district: {
          code: district.code,
          value: district.value,
        },
      };
    } catch (error) {
      console.error(`gRPC error in getDistrict for ${request.district_code}:`, error);
      throw error;
    }
  }

  /**
   * Get all villages in a district
   */
  async getVillagesInDistrict(request: { district_code: string }) {
    try {
      const villages = await this.addressService.getVillagesInDistrict(request.district_code);
      if (!villages) {
        throw new Error(`Villages for district code ${request.district_code} not found`);
      }
      return {
        villages: villages.map(village => ({
          code: village.code,
          value: village.value,
        })),
      };
    } catch (error) {
      console.error(`gRPC error in getVillagesInDistrict for ${request.district_code}:`, error);
      throw error;
    }
  }

  /**
   * Get a specific village by its code
   */
  async getVillage(request: { village_code: string }) {
    try {
      const village = await this.addressService.getVillage(request.village_code);
      if (!village) {
        throw new Error(`Village with code ${request.village_code} not found`);
      }
      return {
        village: {
          code: village.code,
          value: village.value,
        },
      };
    } catch (error) {
      console.error(`gRPC error in getVillage for ${request.village_code}:`, error);
      throw error;
    }
  }

  /**
   * Health check
   */
  async healthCheck() {
    try {
      // Including a simple async operation to satisfy linter
      await Promise.resolve();
      
      return {
        status: 'OK',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('gRPC error in healthCheck:', error);
      throw error;
    }
  }
} 
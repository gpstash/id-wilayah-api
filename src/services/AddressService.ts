import type { AddressResponse } from '../types';
import {
  isValidStateCode,
  isValidCityCode,
  isValidDistrictCode,
  isValidVillageCode,
  extractStateCode,
  extractCityCode,
  extractDistrictCode,
} from '../utils/validation';

/**
 * Address Service - centralizes all data retrieval operations
 * Provides a clean interface for routes to access address data
 */
export class AddressService {
  /**
   * Get all states/provinces
   * @returns Promise with an array of states
   */
  async getAllStates(): Promise<AddressResponse[]> {
    try {
      // Load states data dynamically to allow testing
      const statesData = await import('../data/states.json') as { default: AddressResponse[] };
      return statesData.default;
    } catch (error) {
      console.error('Error loading states data:', error);
      return [];
    }
  }

  /**
   * Get a specific state by its code
   * @param stateCode - The code of the state to retrieve
   * @returns Promise with the state or null if not found
   */
  async getState(stateCode: string): Promise<AddressResponse | null> {
    // Security validation
    if (!isValidStateCode(stateCode)) {
      throw new Error(`Invalid state code: ${stateCode}`);
    }

    try {
      const states = await this.getAllStates();
      const state = states.find(state => state.code === stateCode);
      return state ?? null;
    } catch (error) {
      console.error(`Error getting state ${stateCode}:`, error);
      throw error;
    }
  }

  /**
   * Get all cities in a state
   * @param stateCode - The code of the state
   * @returns Promise with an array of cities or null if state not found
   */
  async getCitiesInState(stateCode: string): Promise<AddressResponse[] | null> {
    // Security validation
    if (!isValidStateCode(stateCode)) {
      return null;
    }

    // Additional input validation
    const sanitizedStateCode = stateCode.replace(/[^0-9]/g, '');
    if (sanitizedStateCode !== stateCode) {
      console.error(`Invalid state code format: ${stateCode}`);
      return null;
    }

    try {
      // Use a type assertion for the dynamic import to avoid the 'any' type error
      const cities = await import(`../data/cities/${sanitizedStateCode}.json`) as { default: AddressResponse[] };
      return cities.default;
    } catch (error) {
      console.error(`Error getting cities for state ${stateCode}:`, error);
      return null;
    }
  }

  /**
   * Get a specific city by its code
   * @param cityCode - The code of the city to retrieve
   * @returns Promise with the city or null if not found
   */
  async getCity(cityCode: string): Promise<AddressResponse | null> {
    // Security validation
    if (!isValidCityCode(cityCode)) {
      return null;
    }

    try {
      const stateCode = extractStateCode(cityCode);
      if (!stateCode) return null;
      
      const cities = await this.getCitiesInState(stateCode);
      if (!cities) return null;
      
      const city = cities.find(city => city.code === cityCode);
      return city ?? null;
    } catch (error) {
      console.error(`Error getting city ${cityCode}:`, error);
      return null;
    }
  }

  /**
   * Get all districts in a city
   * @param cityCode - The code of the city
   * @returns Promise with an array of districts or null if city not found
   */
  async getDistrictsInCity(cityCode: string): Promise<AddressResponse[] | null> {
    // Security validation
    if (!isValidCityCode(cityCode)) {
      return null;
    }

    // Additional input validation
    const sanitizedCityCode = cityCode.replace(/[^0-9.]/g, '');
    if (sanitizedCityCode !== cityCode) {
      console.error(`Invalid city code format: ${cityCode}`);
      return null;
    }

    try {
      // Type assertion for dynamic import
      const districts = await import(`../data/districts/${sanitizedCityCode}.json`) as { default: AddressResponse[] };
      return districts.default;
    } catch (error) {
      console.error(`Error getting districts for city ${cityCode}:`, error);
      return null;
    }
  }

  /**
   * Get a specific district by its code
   * @param districtCode - The code of the district to retrieve
   * @returns Promise with the district or null if not found
   */
  async getDistrict(districtCode: string): Promise<AddressResponse | null> {
    // Security validation
    if (!isValidDistrictCode(districtCode)) {
      return null;
    }

    try {
      const cityCode = extractCityCode(districtCode);
      if (!cityCode) return null;
      
      const districts = await this.getDistrictsInCity(cityCode);
      if (!districts) return null;
      
      const district = districts.find(district => district.code === districtCode);
      return district ?? null;
    } catch (error) {
      console.error(`Error getting district ${districtCode}:`, error);
      return null;
    }
  }

  /**
   * Get all villages in a district
   * @param districtCode - The code of the district
   * @returns Promise with an array of villages or null if district not found
   */
  async getVillagesInDistrict(districtCode: string): Promise<AddressResponse[] | null> {
    // Security validation
    if (!isValidDistrictCode(districtCode)) {
      return null;
    }

    // Additional input validation
    const sanitizedDistrictCode = districtCode.replace(/[^0-9.]/g, '');
    if (sanitizedDistrictCode !== districtCode) {
      console.error(`Invalid district code format: ${districtCode}`);
      return null;
    }

    try {
      // Type assertion for dynamic import
      const villages = await import(`../data/villages/${sanitizedDistrictCode}.json`) as { default: AddressResponse[] };
      return villages.default;
    } catch (error) {
      console.error(`Error getting villages for district ${districtCode}:`, error);
      return null;
    }
  }

  /**
   * Get a specific village by its code
   * @param villageCode - The code of the village to retrieve
   * @returns Promise with the village or null if not found
   */
  async getVillage(villageCode: string): Promise<AddressResponse | null> {
    // Security validation
    if (!isValidVillageCode(villageCode)) {
      return null;
    }

    try {
      const districtCode = extractDistrictCode(villageCode);
      if (!districtCode) return null;
      
      const villages = await this.getVillagesInDistrict(districtCode);
      if (!villages) return null;
      
      const village = villages.find(village => village.code === villageCode);
      return village ?? null;
    } catch (error) {
      console.error(`Error getting village ${villageCode}:`, error);
      return null;
    }
  }
} 
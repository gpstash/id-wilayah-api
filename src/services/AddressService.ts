import type { AddressNode, AddressResponse } from '../types';

/**
 * Address data service - encapsulates all data access operations
 * This separation makes the code more testable and maintainable
 */
export class AddressService {
  private tree: Record<string, AddressNode>;
  
  constructor(data: Record<string, AddressNode>) {
    this.tree = data;
  }
  
  /**
   * Get all states/provinces
   */
  getAllStates(): AddressResponse[] {
    return Object.entries(this.tree).map(([code, state]) => ({
      code,
      value: state.value,
    }));
  }
  
  /**
   * Get a state by its code
   */
  getState(stateCode: string): AddressNode | undefined {
    return this.tree[stateCode];
  }
  
  /**
   * Get all cities in a state
   */
  getCitiesInState(stateCode: string): AddressResponse[] | null {
    const state = this.getState(stateCode);
    if (!state?.children) return null;
    
    return Object.entries(state.children).map(([code, city]) => ({
      code,
      value: city.value,
    }));
  }
  
  /**
   * Find a city by its code (searches across all states)
   */
  findCity(cityCode: string): { city: AddressNode; state: AddressNode } | null {
    for (const state of Object.values(this.tree)) {
      if (!state.children) continue;
      
      const city = state.children[cityCode] as AddressNode | undefined;
      if (city) {
        return { city, state };
      }
    }
    return null;
  }
  
  /**
   * Get all districts in a city
   */
  getDistrictsInCity(cityCode: string): AddressResponse[] | null {
    const result = this.findCity(cityCode);
    if (!result?.city.children) return null;
    
    return Object.entries(result.city.children).map(([code, district]) => ({
      code,
      value: district.value,
    }));
  }
  
  /**
   * Find a district by its code (searches across all cities)
   */
  findDistrict(districtCode: string): { district: AddressNode; city: AddressNode; state: AddressNode } | null {
    for (const state of Object.values(this.tree)) {
      if (!state.children) continue;
      
      for (const city of Object.values(state.children)) {
        if (!city.children) continue;
        
        const district = city.children[districtCode] as AddressNode | undefined;
        if (district) {
          return { district, city, state };
        }
      }
    }
    return null;
  }
  
  /**
   * Get all villages in a district
   */
  getVillagesInDistrict(districtCode: string): AddressResponse[] | null {
    const result = this.findDistrict(districtCode);
    if (!result?.district.children) return null;
    
    return Object.entries(result.district.children).map(([code, village]) => ({
      code,
      value: village.value,
    }));
  }
}

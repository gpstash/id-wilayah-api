import { describe, it, expect, beforeEach } from 'vitest';
import type { AddressNode } from '../types';
import { AddressService } from './AddressService';

// Sample mock data for testing
const mockData: Record<string, AddressNode> = {
  '31': {
    value: 'DKI Jakarta',
    children: {
      '31.74': {
        value: 'Jakarta Selatan',
        children: {
          '31.74.04': {
            value: 'Kebayoran Baru',
            children: {
              '31.74.04.1001': {
                value: 'Gandaria Utara',
              },
            },
          },
        },
      },
    },
  },
};

let service: AddressService;

beforeEach(() => {
  service = new AddressService(mockData);
});

describe('AddressService', () => {
  it('getAllStates returns all states', () => {
    const states = service.getAllStates();
    expect(states).toEqual([
      { code: '31', value: 'DKI Jakarta' },
    ]);
  });

  it('getState returns a state by code', () => {
    expect(service.getState('31')).toEqual(mockData['31']);
    expect(service.getState('32')).toBeUndefined();
  });

  it('getCitiesInState returns all cities in a state', () => {
    const cities = service.getCitiesInState('31');
    expect(cities).toEqual([
      { code: '31.74', value: 'Jakarta Selatan' },
    ]);
    expect(service.getCitiesInState('32')).toBeNull();
  });

  it('findCity returns city and state for valid city code', () => {
    const result = service.findCity('31.74');
    expect(result).toBeTruthy();
    expect(result?.city.value).toBe('Jakarta Selatan');
    expect(result?.state.value).toBe('DKI Jakarta');
    expect(service.findCity('99.99')).toBeNull();
  });

  it('getDistrictsInCity returns all districts in a city', () => {
    const districts = service.getDistrictsInCity('31.74');
    expect(districts).toEqual([
      { code: '31.74.04', value: 'Kebayoran Baru' },
    ]);
    expect(service.getDistrictsInCity('99.99')).toBeNull();
  });

  it('findDistrict returns district, city, and state for valid district code', () => {
    const result = service.findDistrict('31.74.04');
    expect(result).toBeTruthy();
    expect(result?.district.value).toBe('Kebayoran Baru');
    expect(result?.city.value).toBe('Jakarta Selatan');
    expect(result?.state.value).toBe('DKI Jakarta');
    expect(service.findDistrict('00.00.00')).toBeNull();
  });

  it('getVillagesInDistrict returns all villages in a district', () => {
    const villages = service.getVillagesInDistrict('31.74.04');
    expect(villages).toEqual([
      { code: '31.74.04.1001', value: 'Gandaria Utara' },
    ]);
    expect(service.getVillagesInDistrict('00.00.00')).toBeNull();
  });
});

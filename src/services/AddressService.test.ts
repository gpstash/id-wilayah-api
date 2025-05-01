import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AddressService } from '.';

// Mock the dynamic imports
vi.mock('../data/states.json', () => ({
  default: [
    { code: '31', value: 'DKI JAKARTA' },
  ],
}));

vi.mock('../data/cities/31.json', () => ({
  default: [
    { code: '31.74', value: 'JAKARTA SELATAN' },
  ],
}));

vi.mock('../data/districts/31.74.json', () => ({
  default: [
    { code: '31.74.04', value: 'PASAR MINGGU' },
  ],
}));

vi.mock('../data/villages/31.74.04.json', () => ({
  default: [
    { code: '31.74.04.1001', value: 'PASAR MINGGU' },
  ],
}));

// For testing error cases - Mock non-existent data with null instead of throwing errors
vi.mock('../data/cities/99.json', () => ({ default: null }));
vi.mock('../data/cities/00.json', () => ({ default: null }));
vi.mock('../data/districts/99.99.json', () => ({ default: null }));
vi.mock('../data/districts/00.00.json', () => ({ default: null }));
vi.mock('../data/villages/99.99.99.json', () => ({ default: null }));
vi.mock('../data/villages/00.00.00.json', () => ({ default: null }));

let service: AddressService;
let originalConsoleError: typeof console.error;

beforeEach(() => {
  // Save original console.error
  originalConsoleError = console.error;
  // Mock console.error to prevent logs in test output
  console.error = vi.fn();

  service = new AddressService();
  vi.clearAllMocks();
});

afterEach(() => {
  // Restore original console.error
  console.error = originalConsoleError;
});

describe('AddressService', () => {
  describe('getAllStates', () => {
    it('returns all states', async () => {
      const states = await service.getAllStates();
      expect(states).toEqual([
        { code: '31', value: 'DKI JAKARTA' },
      ]);
    });

    it('returns empty array on error', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Mock with error for this specific test
      const originalModule = await import('../data/states.json');
      vi.doMock('../data/states.json', () => {
        throw new Error('Failed to load');
      });
      
      const newService = new AddressService();
      const states = await newService.getAllStates();
      expect(states).toEqual([]);
      
      // Restore the original module
      vi.doMock('../data/states.json', () => originalModule);
    });
  });

  describe('getState', () => {
    it('returns a state by code', async () => {
      const state = await service.getState('31');
      expect(state).toEqual({ code: '31', value: 'DKI JAKARTA' });
    });
    
    it('returns null for non-existent state', async () => {
      const nonExistentState = await service.getState('99');
      expect(nonExistentState).toBeNull();
    });

    it('returns null for invalid state code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats - these should throw errors that we catch and test
      for (const invalidCode of ['', '3', '311', '3a', '31.74', '../31', '../../etc/passwd', '<script>']) {
        await expect(async () => {
          await service.getState(invalidCode);
        }).rejects.toThrow(`Invalid state code: ${invalidCode}`);
      }
    });
  });

  describe('getCitiesInState', () => {
    it('returns cities for valid state code', async () => {
      const cities = await service.getCitiesInState('31');
      expect(cities).toEqual([
        { code: '31.74', value: 'JAKARTA SELATAN' },
      ]);
    });

    it('returns null for invalid state code', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const cities = await service.getCitiesInState('99');
      expect(cities).toBeNull();
    });

    it('returns null for invalid state code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getCitiesInState('')).toBeNull();
      expect(await service.getCitiesInState('3')).toBeNull();
      expect(await service.getCitiesInState('311')).toBeNull();
      expect(await service.getCitiesInState('3a')).toBeNull();
      expect(await service.getCitiesInState('../31')).toBeNull();
      expect(await service.getCitiesInState('../../etc/passwd')).toBeNull();
      expect(await service.getCitiesInState('<script>')).toBeNull();
    });
  });

  describe('getCity', () => {
    it('returns a city by code', async () => {
      const city = await service.getCity('31.74');
      expect(city).toEqual({ code: '31.74', value: 'JAKARTA SELATAN' });
    });
    
    it('returns null for non-existent city', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const nonExistentCity = await service.getCity('99.99');
      expect(nonExistentCity).toBeNull();
    });

    it('returns null for invalid city code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getCity('')).toBeNull();
      expect(await service.getCity('31')).toBeNull();
      expect(await service.getCity('31.7')).toBeNull();
      expect(await service.getCity('31.741')).toBeNull();
      expect(await service.getCity('3a.74')).toBeNull();
      expect(await service.getCity('31.7a')).toBeNull();
      expect(await service.getCity('../31.74')).toBeNull();
      expect(await service.getCity('../../etc/passwd')).toBeNull();
      expect(await service.getCity('<script>')).toBeNull();
    });
  });

  describe('getDistrictsInCity', () => {
    it('returns districts for valid city code', async () => {
      const districts = await service.getDistrictsInCity('31.74');
      expect(districts).toEqual([
        { code: '31.74.04', value: 'PASAR MINGGU' },
      ]);
    });

    it('returns null for invalid city code', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const districts = await service.getDistrictsInCity('99.99');
      expect(districts).toBeNull();
    });

    it('returns null for invalid city code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getDistrictsInCity('')).toBeNull();
      expect(await service.getDistrictsInCity('31')).toBeNull();
      expect(await service.getDistrictsInCity('31.7')).toBeNull();
      expect(await service.getDistrictsInCity('31.741')).toBeNull();
      expect(await service.getDistrictsInCity('3a.74')).toBeNull();
      expect(await service.getDistrictsInCity('31.7a')).toBeNull();
      expect(await service.getDistrictsInCity('../31.74')).toBeNull();
      expect(await service.getDistrictsInCity('../../etc/passwd')).toBeNull();
      expect(await service.getDistrictsInCity('<script>')).toBeNull();
    });
  });

  describe('getDistrict', () => {
    it('returns a district by code', async () => {
      const district = await service.getDistrict('31.74.04');
      expect(district).toEqual({ code: '31.74.04', value: 'PASAR MINGGU' });
    });
    
    it('returns null for non-existent district', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const nonExistentDistrict = await service.getDistrict('99.99.99');
      expect(nonExistentDistrict).toBeNull();
    });

    it('returns null for invalid district code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getDistrict('')).toBeNull();
      expect(await service.getDistrict('31.74')).toBeNull();
      expect(await service.getDistrict('31.74.4')).toBeNull();
      expect(await service.getDistrict('31.74.041')).toBeNull();
      expect(await service.getDistrict('31.74.0a')).toBeNull();
      expect(await service.getDistrict('../31.74.04')).toBeNull();
      expect(await service.getDistrict('../../etc/passwd')).toBeNull();
      expect(await service.getDistrict('<script>')).toBeNull();
    });
  });

  describe('getVillagesInDistrict', () => {
    it('returns villages for valid district code', async () => {
      const villages = await service.getVillagesInDistrict('31.74.04');
      expect(villages).toEqual([
        { code: '31.74.04.1001', value: 'PASAR MINGGU' },
      ]);
    });

    it('returns null for invalid district code', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const villages = await service.getVillagesInDistrict('99.99.99');
      expect(villages).toBeNull();
    });

    it('returns null for invalid district code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getVillagesInDistrict('')).toBeNull();
      expect(await service.getVillagesInDistrict('31.74')).toBeNull();
      expect(await service.getVillagesInDistrict('31.74.4')).toBeNull();
      expect(await service.getVillagesInDistrict('31.74.041')).toBeNull();
      expect(await service.getVillagesInDistrict('31.74.0a')).toBeNull();
      expect(await service.getVillagesInDistrict('../31.74.04')).toBeNull();
      expect(await service.getVillagesInDistrict('../../etc/passwd')).toBeNull();
      expect(await service.getVillagesInDistrict('<script>')).toBeNull();
    });
  });

  describe('getVillage', () => {
    it('returns a village by code', async () => {
      const village = await service.getVillage('31.74.04.1001');
      expect(village).toEqual({ code: '31.74.04.1001', value: 'PASAR MINGGU' });
    });
    
    it('returns null for non-existent village', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      const nonExistentVillage = await service.getVillage('99.99.99.9999');
      expect(nonExistentVillage).toBeNull();
    });

    it('returns null for invalid village code format', async () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Invalid formats
      expect(await service.getVillage('')).toBeNull();
      expect(await service.getVillage('31.74.04')).toBeNull();
      expect(await service.getVillage('31.74.04.100')).toBeNull();
      expect(await service.getVillage('31.74.04.10001')).toBeNull();
      expect(await service.getVillage('31.74.04.a001')).toBeNull();
      expect(await service.getVillage('../31.74.04.1001')).toBeNull();
      expect(await service.getVillage('../../etc/passwd')).toBeNull();
      expect(await service.getVillage('<script>')).toBeNull();
    });
  });
}); 
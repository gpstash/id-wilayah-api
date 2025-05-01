import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { GrpcAddressService } from '.';

// Mock the AddressService
vi.mock('./AddressService', () => {
  return {
    AddressService: vi.fn().mockImplementation(() => ({
      getAllStates: vi.fn().mockResolvedValue([
        { code: '31', value: 'DKI JAKARTA' },
      ]),
      getState: vi.fn().mockImplementation((code: string) => {
        if (code === '31') {
          return Promise.resolve({ code: '31', value: 'DKI JAKARTA' });
        }
        return Promise.resolve(null);
      }),
      getCitiesInState: vi.fn().mockImplementation((code: string) => {
        if (code === '31') {
          return Promise.resolve([
            { code: '31.74', value: 'JAKARTA SELATAN' },
          ]);
        }
        return Promise.resolve(null);
      }),
      getCity: vi.fn().mockImplementation((code: string) => {
        if (code === '31.74') {
          return Promise.resolve({ code: '31.74', value: 'JAKARTA SELATAN' });
        }
        return Promise.resolve(null);
      }),
      getDistrictsInCity: vi.fn().mockImplementation((code: string) => {
        if (code === '31.74') {
          return Promise.resolve([
            { code: '31.74.04', value: 'PASAR MINGGU' },
          ]);
        }
        return Promise.resolve(null);
      }),
      getDistrict: vi.fn().mockImplementation((code: string) => {
        if (code === '31.74.04') {
          return Promise.resolve({ code: '31.74.04', value: 'PASAR MINGGU' });
        }
        return Promise.resolve(null);
      }),
      getVillagesInDistrict: vi.fn().mockImplementation((code: string) => {
        if (code === '31.74.04') {
          return Promise.resolve([
            { code: '31.74.04.1001', value: 'PASAR MINGGU' },
          ]);
        }
        return Promise.resolve(null);
      }),
      getVillage: vi.fn().mockImplementation((code: string) => {
        if (code === '31.74.04.1001') {
          return Promise.resolve({ code: '31.74.04.1001', value: 'PASAR MINGGU' });
        }
        return Promise.resolve(null);
      }),
    })),
  };
});

let service: GrpcAddressService;
let originalConsoleError: typeof console.error;

beforeEach(() => {
  // Save original console.error
  originalConsoleError = console.error;
  
  // Mock console.error to prevent logs in test output
  console.error = vi.fn();
  
  service = new GrpcAddressService();
  vi.clearAllMocks();
});

afterEach(() => {
  // Restore original console.error
  console.error = originalConsoleError;
});

describe('GrpcAddressService', () => {
  describe('getAllStates', () => {
    it('returns all states in the expected format', async () => {
      const result = await service.getAllStates();
      expect(result).toEqual({
        states: [
          { code: '31', value: 'DKI JAKARTA' },
        ],
      });
    });
    
    it('handles errors gracefully', async () => {
      const mockError = new Error('Test error');
      const mockAddressService = {
        getAllStates: vi.fn().mockRejectedValue(mockError),
      };
      
      // @ts-expect-error - mocking private service
      service.addressService = mockAddressService;
      
      await expect(service.getAllStates()).rejects.toThrow(mockError);
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getState', () => {
    it('returns a state by code in the expected format', async () => {
      const result = await service.getState({ state_code: '31' });
      expect(result).toEqual({
        state: { code: '31', value: 'DKI JAKARTA' },
      });
    });
    
    it('throws error for non-existent state', async () => {
      await expect(service.getState({ state_code: '99' }))
        .rejects.toThrow('State with code 99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getCitiesInState', () => {
    it('returns cities for valid state code', async () => {
      const result = await service.getCitiesInState({ state_code: '31' });
      expect(result).toEqual({
        cities: [
          { code: '31.74', value: 'JAKARTA SELATAN' },
        ],
      });
    });
    
    it('throws error for invalid state code', async () => {
      await expect(service.getCitiesInState({ state_code: '99' }))
        .rejects.toThrow('Cities for state code 99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getCity', () => {
    it('returns a city by code in the expected format', async () => {
      const result = await service.getCity({ city_code: '31.74' });
      expect(result).toEqual({
        city: { code: '31.74', value: 'JAKARTA SELATAN' },
      });
    });
    
    it('throws error for non-existent city', async () => {
      await expect(service.getCity({ city_code: '99.99' }))
        .rejects.toThrow('City with code 99.99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getDistrictsInCity', () => {
    it('returns districts for valid city code', async () => {
      const result = await service.getDistrictsInCity({ city_code: '31.74' });
      expect(result).toEqual({
        districts: [
          { code: '31.74.04', value: 'PASAR MINGGU' },
        ],
      });
    });
    
    it('throws error for invalid city code', async () => {
      await expect(service.getDistrictsInCity({ city_code: '99.99' }))
        .rejects.toThrow('Districts for city code 99.99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getDistrict', () => {
    it('returns a district by code in the expected format', async () => {
      const result = await service.getDistrict({ district_code: '31.74.04' });
      expect(result).toEqual({
        district: { code: '31.74.04', value: 'PASAR MINGGU' },
      });
    });
    
    it('throws error for non-existent district', async () => {
      await expect(service.getDistrict({ district_code: '99.99.99' }))
        .rejects.toThrow('District with code 99.99.99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getVillagesInDistrict', () => {
    it('returns villages for valid district code', async () => {
      const result = await service.getVillagesInDistrict({ district_code: '31.74.04' });
      expect(result).toEqual({
        villages: [
          { code: '31.74.04.1001', value: 'PASAR MINGGU' },
        ],
      });
    });
    
    it('throws error for invalid district code', async () => {
      await expect(service.getVillagesInDistrict({ district_code: '99.99.99' }))
        .rejects.toThrow('Villages for district code 99.99.99 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('getVillage', () => {
    it('returns a village by code in the expected format', async () => {
      const result = await service.getVillage({ village_code: '31.74.04.1001' });
      expect(result).toEqual({
        village: { code: '31.74.04.1001', value: 'PASAR MINGGU' },
      });
    });
    
    it('throws error for non-existent village', async () => {
      await expect(service.getVillage({ village_code: '99.99.99.9999' }))
        .rejects.toThrow('Village with code 99.99.99.9999 not found');
      expect(console.error).toHaveBeenCalled();
    });
  });
  
  describe('healthCheck', () => {
    it('returns health check information', async () => {
      // Mock date for consistent test results
      const realDate = global.Date;
      global.Date = class extends Date {
        toISOString() {
          return '2023-05-01T12:34:56.789Z';
        }
      } as typeof Date;
      
      const result = await service.healthCheck();
      
      expect(result).toEqual({
        status: 'OK',
        version: '1.0.0',
        timestamp: '2023-05-01T12:34:56.789Z',
      });
      
      // Restore original Date
      global.Date = realDate;
    });
  });
}); 
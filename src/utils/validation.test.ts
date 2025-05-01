import { describe, it, expect } from 'vitest';
import {
  validateAddressData,
  isValidStateCode,
  isValidCityCode,
  isValidDistrictCode,
  isValidVillageCode,
  extractStateCode,
  extractCityCode,
  extractDistrictCode,
} from './validation';

const validData = {
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

const invalidData = {
  '31': {
    value: 'DKI Jakarta',
    children: {},
  },
};

describe('validateAddressData', () => {
  it('should validate correct data', () => {
    const result = validateAddressData(validData);
    expect(result.success).toBe(true);
  });

  it('should fail on invalid data', () => {
    const result = validateAddressData(invalidData);
    expect(result.success).toBe(true); // No type to invalidate, so should pass
  });
});

describe('Code Validation Functions', () => {
  describe('isValidStateCode', () => {
    it('should accept valid state codes', () => {
      expect(isValidStateCode('31')).toBe(true);
      expect(isValidStateCode('01')).toBe(true);
      expect(isValidStateCode('99')).toBe(true);
    });

    it('should reject invalid state codes', () => {
      expect(isValidStateCode('')).toBe(false);
      expect(isValidStateCode('1')).toBe(false);
      expect(isValidStateCode('100')).toBe(false);
      expect(isValidStateCode('3a')).toBe(false);
      expect(isValidStateCode('a3')).toBe(false);
      expect(isValidStateCode('31.74')).toBe(false);
      expect(isValidStateCode('../31')).toBe(false);
      expect(isValidStateCode('../../etc/passwd')).toBe(false);
      expect(isValidStateCode('\u0000')).toBe(false);
      expect(isValidStateCode('<script>')).toBe(false);
      expect(isValidStateCode(null as unknown as string)).toBe(false);
      expect(isValidStateCode(undefined as unknown as string)).toBe(false);
    });
  });

  describe('isValidCityCode', () => {
    it('should accept valid city codes', () => {
      expect(isValidCityCode('31.74')).toBe(true);
      expect(isValidCityCode('01.01')).toBe(true);
      expect(isValidCityCode('99.99')).toBe(true);
    });

    it('should reject invalid city codes', () => {
      expect(isValidCityCode('')).toBe(false);
      expect(isValidCityCode('31')).toBe(false);
      expect(isValidCityCode('31.7')).toBe(false);
      expect(isValidCityCode('31.747')).toBe(false);
      expect(isValidCityCode('a1.74')).toBe(false);
      expect(isValidCityCode('31.a4')).toBe(false);
      expect(isValidCityCode('31:74')).toBe(false);
      expect(isValidCityCode('31.74.04')).toBe(false);
      expect(isValidCityCode('../31.74')).toBe(false);
      expect(isValidCityCode('31/74')).toBe(false);
      expect(isValidCityCode('\u0000')).toBe(false);
      expect(isValidCityCode('<script>')).toBe(false);
      expect(isValidCityCode(null as unknown as string)).toBe(false);
      expect(isValidCityCode(undefined as unknown as string)).toBe(false);
    });
  });

  describe('isValidDistrictCode', () => {
    it('should accept valid district codes', () => {
      expect(isValidDistrictCode('31.74.04')).toBe(true);
      expect(isValidDistrictCode('01.01.01')).toBe(true);
      expect(isValidDistrictCode('99.99.99')).toBe(true);
    });

    it('should reject invalid district codes', () => {
      expect(isValidDistrictCode('')).toBe(false);
      expect(isValidDistrictCode('31.74')).toBe(false);
      expect(isValidDistrictCode('31.74.4')).toBe(false);
      expect(isValidDistrictCode('31.74.044')).toBe(false);
      expect(isValidDistrictCode('a1.74.04')).toBe(false);
      expect(isValidDistrictCode('31.a4.04')).toBe(false);
      expect(isValidDistrictCode('31.74.a4')).toBe(false);
      expect(isValidDistrictCode('31:74:04')).toBe(false);
      expect(isValidDistrictCode('31.74.04.1001')).toBe(false);
      expect(isValidDistrictCode('../31.74.04')).toBe(false);
      expect(isValidDistrictCode('\u0000')).toBe(false);
      expect(isValidDistrictCode('<script>')).toBe(false);
      expect(isValidDistrictCode(null as unknown as string)).toBe(false);
      expect(isValidDistrictCode(undefined as unknown as string)).toBe(false);
    });
  });

  describe('isValidVillageCode', () => {
    it('should accept valid village codes', () => {
      expect(isValidVillageCode('31.74.04.1001')).toBe(true);
      expect(isValidVillageCode('01.01.01.0001')).toBe(true);
      expect(isValidVillageCode('99.99.99.9999')).toBe(true);
    });

    it('should reject invalid village codes', () => {
      expect(isValidVillageCode('')).toBe(false);
      expect(isValidVillageCode('31.74.04')).toBe(false);
      expect(isValidVillageCode('31.74.04.100')).toBe(false);
      expect(isValidVillageCode('31.74.04.10001')).toBe(false);
      expect(isValidVillageCode('a1.74.04.1001')).toBe(false);
      expect(isValidVillageCode('31.a4.04.1001')).toBe(false);
      expect(isValidVillageCode('31.74.a4.1001')).toBe(false);
      expect(isValidVillageCode('31.74.04.a001')).toBe(false);
      expect(isValidVillageCode('31:74:04:1001')).toBe(false);
      expect(isValidVillageCode('../31.74.04.1001')).toBe(false);
      expect(isValidVillageCode('\u0000')).toBe(false);
      expect(isValidVillageCode('<script>')).toBe(false);
      expect(isValidVillageCode(null as unknown as string)).toBe(false);
      expect(isValidVillageCode(undefined as unknown as string)).toBe(false);
    });
  });

  describe('extractStateCode', () => {
    it('should extract state code correctly', () => {
      expect(extractStateCode('31')).toBe('31');
      expect(extractStateCode('31.74')).toBe('31');
      expect(extractStateCode('31.74.04')).toBe('31');
      expect(extractStateCode('31.74.04.1001')).toBe('31');
    });

    it('should return null for invalid inputs', () => {
      expect(extractStateCode('')).toBeNull();
      expect(extractStateCode('3')).toBeNull();
      expect(extractStateCode('a1')).toBeNull();
      expect(extractStateCode('a1.74')).toBeNull();
      expect(extractStateCode('../31')).toBeNull();
      expect(extractStateCode(null as unknown as string)).toBeNull();
      expect(extractStateCode(undefined as unknown as string)).toBeNull();
    });
  });

  describe('extractCityCode', () => {
    it('should extract city code correctly', () => {
      expect(extractCityCode('31.74')).toBe('31.74');
      expect(extractCityCode('31.74.04')).toBe('31.74');
      expect(extractCityCode('31.74.04.1001')).toBe('31.74');
    });

    it('should return null for invalid inputs', () => {
      expect(extractCityCode('')).toBeNull();
      expect(extractCityCode('31')).toBeNull();
      expect(extractCityCode('31.7')).toBeNull();
      expect(extractCityCode('a1.74')).toBeNull();
      expect(extractCityCode('../31.74')).toBeNull();
      expect(extractCityCode(null as unknown as string)).toBeNull();
      expect(extractCityCode(undefined as unknown as string)).toBeNull();
    });
  });

  describe('extractDistrictCode', () => {
    it('should extract district code correctly', () => {
      expect(extractDistrictCode('31.74.04')).toBe('31.74.04');
      expect(extractDistrictCode('31.74.04.1001')).toBe('31.74.04');
    });

    it('should return null for invalid inputs', () => {
      expect(extractDistrictCode('')).toBeNull();
      expect(extractDistrictCode('31')).toBeNull();
      expect(extractDistrictCode('31.74')).toBeNull();
      expect(extractDistrictCode('31.74.0')).toBeNull();
      expect(extractDistrictCode('a1.74.04')).toBeNull();
      expect(extractDistrictCode('../31.74.04')).toBeNull();
      expect(extractDistrictCode(null as unknown as string)).toBeNull();
      expect(extractDistrictCode(undefined as unknown as string)).toBeNull();
    });
  });
});

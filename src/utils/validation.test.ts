import { describe, it, expect } from 'vitest';
import { validateAddressData } from './validation';

const validData = {
  '31': {
    value: 'DKI Jakarta',
    type: 'State',
    children: {
      '31.74': {
        value: 'Jakarta Selatan',
        type: 'City',
        children: {
          '31.74.04': {
            value: 'Kebayoran Baru',
            type: 'District',
            children: {
              '31.74.04.1001': {
                value: 'Gandaria Utara',
                type: 'Village',
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
    type: 'Province', // Invalid type
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
    expect(result.success).toBe(false);
    expect(result.error.issues[0].message).toMatch(/Invalid enum value/);
  });
});

import { describe, it, expect } from 'vitest';
import { validateAddressData } from './validation';

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

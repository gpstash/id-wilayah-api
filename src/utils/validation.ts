import { z } from 'zod';
import type { AddressNode } from '../types';

/**
 * Zod schema for runtime validation of address data
 */
export const AddressNodeSchema: z.ZodType<AddressNode> = z.lazy(() => z.object({
  value: z.string(),
  type: z.enum(['STATE', 'CITY', 'DISTRICT', 'VILLAGE']),
  children: z.record(z.lazy(() => AddressNodeSchema)).optional(),
}));

export const AddressTreeSchema = z.record(AddressNodeSchema);

/**
 * Validates address data against the schema
 * @param data The address data to validate
 * @returns The validation result
 */
export function validateAddressData(data: unknown) {
  return AddressTreeSchema.safeParse(data);
}

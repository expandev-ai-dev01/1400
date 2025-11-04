/**
 * @summary
 * Zod validation schema helpers
 *
 * @module utils/zodValidation
 *
 * @description
 * Provides reusable Zod validation schemas for common data types.
 */

import { z } from 'zod';

/**
 * @summary
 * Standard string validation with max length
 */
export const zString = z.string().min(1);

/**
 * @summary
 * Nullable string validation with max length
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary
 * Name field validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @summary
 * Description field validation (max 500 characters, nullable)
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary
 * Foreign key validation (positive integer)
 */
export const zFK = z.number().int().positive();

/**
 * @summary
 * Nullable foreign key validation
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @summary
 * Bit/Boolean validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @summary
 * Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @summary
 * Email validation
 */
export const zEmail = z.string().email();

/**
 * @summary
 * Phone number validation (basic format)
 */
export const zPhone = z.string().regex(/^\+?[1-9]\d{1,14}$/);

/**
 * @summary
 * URL validation
 */
export const zUrl = z.string().url();

/**
 * @summary
 * Numeric decimal validation (15,2 precision)
 */
export const zNumeric = z.number();

/**
 * @summary
 * Price validation (18,6 precision)
 */
export const zPrice = z.number().nonnegative();

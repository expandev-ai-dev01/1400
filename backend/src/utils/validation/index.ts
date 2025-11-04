/**
 * @summary
 * Validation utility functions
 *
 * @module utils/validation
 *
 * @description
 * Provides common validation functions for request parameters and business rules.
 */

/**
 * @summary
 * Validates that a required parameter is not null or undefined
 *
 * @function validateRequiredParam
 * @module utils/validation
 *
 * @param {any} param - Parameter to validate
 * @param {string} paramName - Name of parameter for error message
 *
 * @throws {Error} When parameter is null or undefined
 *
 * @example
 * validateRequiredParam(userId, 'userId');
 */
export function validateRequiredParam(param: any, paramName: string): void {
  if (param === null || param === undefined) {
    throw new Error(`${paramName}Required`);
  }
}

/**
 * @summary
 * Validates that a numeric value is positive
 *
 * @function validatePositiveNumber
 * @module utils/validation
 *
 * @param {number} value - Value to validate
 * @param {string} fieldName - Name of field for error message
 *
 * @throws {Error} When value is not positive
 *
 * @example
 * validatePositiveNumber(quantity, 'quantity');
 */
export function validatePositiveNumber(value: number, fieldName: string): void {
  if (value <= 0) {
    throw new Error(`${fieldName}MustBePositive`);
  }
}

/**
 * @summary
 * Validates that a numeric value is non-negative
 *
 * @function validateNonNegativeNumber
 * @module utils/validation
 *
 * @param {number} value - Value to validate
 * @param {string} fieldName - Name of field for error message
 *
 * @throws {Error} When value is negative
 *
 * @example
 * validateNonNegativeNumber(price, 'price');
 */
export function validateNonNegativeNumber(value: number, fieldName: string): void {
  if (value < 0) {
    throw new Error(`${fieldName}MustBeNonNegative`);
  }
}

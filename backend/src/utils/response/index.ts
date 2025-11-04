/**
 * @summary
 * Response formatting utilities
 *
 * @module utils/response
 *
 * @description
 * Provides standardized response formatting functions for API endpoints.
 */

/**
 * @interface SuccessResponse
 * @description Standard success response structure
 *
 * @property {boolean} success - Always true for successful responses
 * @property {T} data - Response data
 * @property {object} metadata - Optional metadata
 * @property {string} metadata.timestamp - ISO timestamp of response
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * res.json(successResponse({ id: 1, name: 'Example' }));
 */
export function successResponse<T>(
  data: T,
  metadata?: Partial<SuccessResponse<T>['metadata']>
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @interface ListResponse
 * @description Standard list response structure with pagination
 *
 * @property {boolean} success - Always true for successful responses
 * @property {T[]} data - Array of response items
 * @property {object} metadata - Pagination metadata
 * @property {number} metadata.page - Current page number
 * @property {number} metadata.pageSize - Items per page
 * @property {number} metadata.total - Total number of items
 * @property {boolean} metadata.hasNext - Whether next page exists
 * @property {boolean} metadata.hasPrevious - Whether previous page exists
 */
export interface ListResponse<T> {
  success: true;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

/**
 * @summary
 * Creates a standardized list response with pagination
 *
 * @function listResponse
 * @module utils/response
 *
 * @param {T[]} data - Array of items
 * @param {number} page - Current page number
 * @param {number} pageSize - Items per page
 * @param {number} total - Total number of items
 *
 * @returns {ListResponse<T>} Formatted list response
 *
 * @example
 * res.json(listResponse(items, 1, 10, 100));
 */
export function listResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): ListResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
    },
  };
}

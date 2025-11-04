/**
 * @summary
 * Global error handling middleware
 *
 * @module middleware/error
 *
 * @description
 * Centralized error handling for all API endpoints.
 * Catches and formats errors consistently across the application.
 */

import { Request, Response, NextFunction } from 'express';

/**
 * @interface ErrorResponse
 * @description Standard error response structure
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code identifier
 * @property {string} error.message - Human-readable error message
 * @property {any} error.details - Additional error details (optional)
 * @property {string} timestamp - ISO timestamp of error occurrence
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Global error handling middleware
 *
 * @function errorMiddleware
 * @module middleware/error
 *
 * @param {Error} err - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 *
 * @example
 * app.use(errorMiddleware);
 */
export async function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const statusCode = err.statusCode || 500;
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';
  const message = err.message || 'An unexpected error occurred';

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: message,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  console.error('Error:', {
    code: errorCode,
    message: message,
    path: req.path,
    method: req.method,
    stack: err.stack,
  });

  res.status(statusCode).json(errorResponse);
}

/**
 * @summary
 * Creates a standardized error response object
 *
 * @function errorResponse
 * @module middleware/error
 *
 * @param {string} message - Error message
 * @param {string} code - Error code (optional)
 * @param {any} details - Additional error details (optional)
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * res.status(400).json(errorResponse('Invalid input', 'VALIDATION_ERROR'));
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}

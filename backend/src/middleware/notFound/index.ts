/**
 * @summary
 * 404 Not Found middleware
 *
 * @module middleware/notFound
 *
 * @description
 * Handles requests to undefined routes by returning a standardized 404 response.
 */

import { Request, Response } from 'express';
import { errorResponse } from '@/middleware/error';

/**
 * @summary
 * Handles 404 Not Found errors for undefined routes
 *
 * @function notFoundMiddleware
 * @module middleware/notFound
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {void}
 *
 * @example
 * app.use(notFoundMiddleware);
 */
export async function notFoundMiddleware(req: Request, res: Response): Promise<void> {
  res
    .status(404)
    .json(errorResponse(`Route ${req.method} ${req.path} not found`, 'ROUTE_NOT_FOUND'));
}

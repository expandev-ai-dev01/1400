/**
 * @summary
 * Class API controller
 *
 * @module api/v1/external/class/controller
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { classList, classGet } from '@/services/class';
import { successResponse, errorResponse } from '@/utils/response';

const listQuerySchema = z.object({
  level: z.string().optional(),
  targetAudience: z.string().optional(),
  schedule: z.string().optional(),
});

const getParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

/**
 * @api {get} /external/class List Classes
 * @apiName ListClasses
 * @apiGroup Class
 * @apiVersion 1.0.0
 *
 * @apiDescription Lists all available classes with optional filters
 *
 * @apiParam {String} [level] Filter by level (basic, intermediate, advanced)
 * @apiParam {String} [targetAudience] Filter by target audience
 * @apiParam {String} [schedule] Filter by schedule
 *
 * @apiSuccess {Object[]} data Array of classes
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = listQuerySchema.parse(req.query);

    const data = await classList(validated);

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse(error.message, 'VALIDATION_ERROR'));
    } else {
      next(error);
    }
  }
}

/**
 * @api {get} /external/class/:id Get Class Details
 * @apiName GetClass
 * @apiGroup Class
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets detailed information about a specific class
 *
 * @apiParam {Number} id Class identifier
 *
 * @apiSuccess {Object} data Class details
 *
 * @apiError {String} NotFound Class not found
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = getParamsSchema.parse(req.params);

    const data = await classGet({ idClass: validated.id });

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse(error.message, 'VALIDATION_ERROR'));
    } else if (error.message === 'classNotFound') {
      res.status(404).json(errorResponse('Class not found', 'NOT_FOUND'));
    } else {
      next(error);
    }
  }
}

/**
 * @summary
 * Content API controller
 *
 * @module api/v1/external/content/controller
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { pageContentList } from '@/services/content';
import { successResponse, errorResponse } from '@/utils/response';

const paramsSchema = z.object({
  pageKey: z.string().min(1),
});

/**
 * @api {get} /external/content/:pageKey Get Page Content
 * @apiName GetPageContent
 * @apiGroup Content
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves content for a specific page
 *
 * @apiParam {String} pageKey Page identifier
 *
 * @apiSuccess {Object[]} data Array of page content items
 * @apiSuccess {Number} data.idPageContent Content identifier
 * @apiSuccess {String} data.contentKey Content key
 * @apiSuccess {String} data.contentValue Content value
 * @apiSuccess {String} data.contentType Content type
 *
 * @apiError {String} ValidationError Invalid page key
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = paramsSchema.parse(req.params);

    const data = await pageContentList({ pageKey: validated.pageKey });

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse(error.message, 'VALIDATION_ERROR'));
    } else {
      next(error);
    }
  }
}

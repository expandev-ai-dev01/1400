/**
 * @summary
 * Contact API controller
 *
 * @module api/v1/external/contact/controller
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { contactCreate } from '@/services/contact';
import { successResponse, errorResponse } from '@/utils/response';
import { zEmail } from '@/utils/zodValidation';

const bodySchema = z.object({
  name: z.string().min(3).max(100),
  email: zEmail,
  phone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/),
  interestType: z.string().min(1),
  idClass: z.number().int().positive().optional(),
  message: z.string().min(10).max(1000),
  privacyAccepted: z.boolean(),
});

/**
 * @api {post} /external/contact Create Contact
 * @apiName CreateContact
 * @apiGroup Contact
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new contact form submission
 *
 * @apiParam {String} name Contact name (3-100 characters)
 * @apiParam {String} email Valid email address
 * @apiParam {String} phone Phone number in format (XX) XXXXX-XXXX
 * @apiParam {String} interestType Type of interest
 * @apiParam {Number} [idClass] Class of interest (optional)
 * @apiParam {String} message Message (10-1000 characters)
 * @apiParam {Boolean} privacyAccepted Privacy policy acceptance
 *
 * @apiSuccess {Number} idContact Created contact identifier
 *
 * @apiError {String} ValidationError Invalid input data
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = bodySchema.parse(req.body);

    const data = await contactCreate(validated);

    res.status(201).json(successResponse(data));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse(error.message, 'VALIDATION_ERROR'));
    } else {
      next(error);
    }
  }
}

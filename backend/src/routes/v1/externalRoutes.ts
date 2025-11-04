/**
 * @summary
 * External (public) API routes configuration
 *
 * @module routes/v1/externalRoutes
 *
 * @description
 * Defines all public API endpoints that do not require authentication.
 */

import { Router } from 'express';
import * as contentController from '@/api/v1/external/content/controller';
import * as classController from '@/api/v1/external/class/controller';
import * as contactController from '@/api/v1/external/contact/controller';

const router = Router();

/**
 * @remarks
 * Content routes
 */
router.get('/content/:pageKey', contentController.getHandler);

/**
 * @remarks
 * Class routes
 */
router.get('/class', classController.listHandler);
router.get('/class/:id', classController.getHandler);

/**
 * @remarks
 * Contact routes
 */
router.post('/contact', contactController.postHandler);

export default router;

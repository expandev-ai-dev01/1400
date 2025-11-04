/**
 * @summary
 * V1 API router configuration
 *
 * @module routes/v1
 *
 * @description
 * Configures version 1 API routes, separating external (public) and internal (authenticated) endpoints.
 */

import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

/**
 * @api {all} /external/* External Routes
 * @apiName ExternalRoutes
 * @apiGroup V1
 * @apiVersion 1.0.0
 *
 * @apiDescription Public API endpoints accessible without authentication
 */
router.use('/external', externalRoutes);

/**
 * @api {all} /internal/* Internal Routes
 * @apiName InternalRoutes
 * @apiGroup V1
 * @apiVersion 1.0.0
 *
 * @apiDescription Protected API endpoints requiring authentication
 */
router.use('/internal', internalRoutes);

export default router;

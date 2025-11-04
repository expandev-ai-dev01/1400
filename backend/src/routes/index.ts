/**
 * @summary
 * Main API router with version management
 *
 * @module routes
 *
 * @description
 * Configures API versioning and routes all requests to appropriate version handlers.
 * Supports multiple API versions for backward compatibility.
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

/**
 * @api {all} /v1/* Version 1 Routes
 * @apiName V1Routes
 * @apiGroup Versioning
 * @apiVersion 1.0.0
 *
 * @apiDescription Routes all v1 API requests to version 1 handlers
 */
router.use('/v1', v1Routes);

export default router;

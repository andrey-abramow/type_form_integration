import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /request_callbacks Create request collback
 * @apiName CreateRequestCollback
 * @apiGroup RequestCollback
 * @apiSuccess {Object} requestCollback Request collback's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Request collback not found.
 */
router.post('/',
  create)

export default router

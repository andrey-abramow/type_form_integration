import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /type_form_callbacks Create type form callback
 * @apiName CreateTypeFormCallback
 * @apiGroup TypeFormCallback
 * @apiSuccess {Object} typeFormCallback Type form callback's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Type form callback not found.
 */
router.post('/',
  create)

export default router

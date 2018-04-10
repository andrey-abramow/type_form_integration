import { Router } from 'express'
import request_from_partners_callback from './request_from_partners_callback'
import requestCollback from './request_callback'

const router = new Router()

router.use('/request_from_partners_callbacks', request_from_partners_callback)
router.use('/request_callbacks', requestCollback)

export default router

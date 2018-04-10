import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create } from './controller'

const router = new Router()

router.post('/',
  create)

export default router

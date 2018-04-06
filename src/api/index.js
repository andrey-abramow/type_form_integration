import { Router } from 'express'
import typeFormCallback from './type_form_callback'

const router = new Router()

router.use('/type_form_callbacks', typeFormCallback)

export default router

import {Router} from 'express'
import {validateAntiFradu} from '../controllers/antifraud.controller.js'
import router from './index.routes.js'

router.put('/antifraud/:id', validateAntiFradu)
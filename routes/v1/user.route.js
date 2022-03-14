import express from 'express'
import { userController } from '../../controllers/index.js'
const router = express.Router()

router.route('/').get(userController.userDetail)

export default router

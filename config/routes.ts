

import express from 'express'
import userRoute1 from './routes/v1/user.routes'

const router = express.Router()

// v1
router.use('/v1', userRoute1)

export default router
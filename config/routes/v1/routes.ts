

import express from 'express'
import userRoute from './user.routes'
import authRoute from './auth.routes'

const router = express.Router()
const defaultRoutes = [
  {
    path: '/auths',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
import asyncHandler from 'express-async-handler'
import { userService } from '../services/index.js'

const userDetail = asyncHandler(async (req, res) => {
  const user = await userService.getUserById('5d6ede6a0ba62570afcedd3a')
  const response = res.response
  res.status(res.statusCode)
  res.send({
    message: 'Hello from user controller',
    user,
  })
})

export { userDetail }

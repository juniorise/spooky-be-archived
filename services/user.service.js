import { User } from '../models/index.js'

const getUserById = async (id) => {
  console.log(User)
  return User.findById(id)
}

export { getUserById }

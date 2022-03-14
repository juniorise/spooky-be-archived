import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
import Product from './product.model.js'
import Notification from './notification.model.js'
import Device_token from './device_token.model.js'

const user_configSchema = mongoose.Schema({
  name: String,
  value: String,
})

const cloud_storageSchema = mongoose.Schema(
  {
    email: String,
    first_name: String,
    last_name: String,
    type: { enum: ['google_drive', 'dropbox'] },
  },
  { _id: false, timestamps: false }
)

const userSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    config: [user_configSchema],
    nickname: String,
    first_name: String,
    last_name: String,
    profile_url: String,
    credential_ids: [{ type: String }],
    purchased_products: [{ type: mongoose.Types.ObjectId, ref: Product }],
    cloud_storages: [cloud_storageSchema],
    device_tokens: [{ type: mongoose.Types.ObjectId, ref: Device_token }],
    notifications: [{ type: mongoose.Types.ObjectId, ref: Notification }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

userSchema.plugin(normalize)

const User = mongoose.model('Users', userSchema)

export default User

import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
import Product from './product.model.js'
import Notification from './notification.model.js'
import DeviceToken from './device_token.model.js'

const userConfigSchema = mongoose.Schema({
  name: String,
  value: String,
})

const cloudStorageSchema = mongoose.Schema(
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
    config: [userConfigSchema],
    nickname: String,
    first_name: String,
    last_name: String,
    profile_url: String,
    credential_ids: [{ type: String }],
    purchased_products: [{ type: mongoose.Types.ObjectId, ref: Product }],
    cloud_storages: [cloudStorageSchema],
    device_tokens: [{ type: mongoose.Types.ObjectId, ref: DeviceToken }],
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

const User = mongoose.model('User', userSchema)

export default User

import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';
import DeviceToken from './device_token.model';
import Product from './product.model';


const userConfigSchema = new mongoose.Schema({
  name: String,
  value: String,
})

const cloudStorageSchema = new mongoose.Schema(
  {
    email: String,
    profile_url: String,
    type: { enum: ['google_drive', 'dropbox'] },
  },
  { _id: false, timestamps: false }
)

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    config: [userConfigSchema],
    nickname: String,
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

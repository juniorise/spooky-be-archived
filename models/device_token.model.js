import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'

const deviceTokenSchema = mongoose.Schema(
  {
    version: String,
    build_number: String,
    build_signature: Number,
    device_name: String,
    device_model: String,
    device_brand: String,
    device_os_version: String,
  },
  {
    timestamps: false,
  }
)

deviceTokenSchema.plugin(normalize)

const DeviceToken = mongoose.model('DeviceToken', deviceTokenSchema)

export default DeviceToken

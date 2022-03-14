import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'

const device_tokenSchema = mongoose.Schema(
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

device_tokenSchema.plugin(normalize)

const Device_token = mongoose.model('Device_tokens', device_tokenSchema)

export default Device_token

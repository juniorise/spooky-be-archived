import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'

const payloadSchema = mongoose.Schema(
  {
    body: String,
    image_url: String,
    url: String,
  },
  {
    _id: false,
    timestamps: false,
  }
)

const notificationSchema = mongoose.Schema(
  {
    type: { enum: ['explore', 'system'] },
    payload: payloadSchema,
    title: String,
    message: String,
    send_now: Boolean,
    schedule: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

notificationSchema.plugin(normalize)

const Notification = mongoose.model('Notifications', notificationSchema)

export default Notification

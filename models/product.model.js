import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    currency: String,
  },
  {
    timestamps: false,
  }
)

productSchema.plugin(normalize)

const Product = mongoose.model('Products', productSchema)

export default Product

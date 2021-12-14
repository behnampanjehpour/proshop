import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
  },
  { timestampes: true }
)
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  { timestampes: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product
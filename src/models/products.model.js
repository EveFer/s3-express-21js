import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String
    },
    keyImage: { 
        type: String
    }
})

export const Product = mongoose.model('products', productSchema)
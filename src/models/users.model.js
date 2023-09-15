import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    // Referencia a la colección de files
    avatar: { type: Schema.Types.ObjectId, ref: 'files' }
})

export const User = model('users', userSchema)
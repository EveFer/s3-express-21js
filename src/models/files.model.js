import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
    url: {
        type: String
    },
    key: { 
        type: String
    }
})

export const File = mongoose.model('files', fileSchema)
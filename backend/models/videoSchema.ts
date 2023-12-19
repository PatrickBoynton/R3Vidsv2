import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    uploadedDate: {
        type: Date,
        required: true
    },
    tags: [
        {
            type: String,
            trim: true
        }
    ],
    metadata: {
        duration: Number,
    },
    played: {
        type: Boolean,
        required: true,
    },
    currentPlayTime: {
        type: Number,
        required: true,
    },
    playCount: {
        type: Number,
        required: true,
        default: 0
    },
    lastPlayed: {
        type: Date,
    },
})  

export const Video = mongoose.model('Video', videoSchema)
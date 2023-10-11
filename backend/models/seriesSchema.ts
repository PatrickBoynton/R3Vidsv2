import mongoose  from 'mongoose'
import { IVideo} from '../interfaces/IVideo'
import { Video } from './videoSchema'

const seriesSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true
  },
  thumbnail: {
    type: String
  },
  numVideos: {
    type: Number,
    required: true
  },
  videos: {
    type: [Video]
  },
  progress: {
    type: Number,
    required: true
  }
})

export const Series = mongoose.model('Series', seriesSchema)
import { Document } from 'mongoose'

export interface IVideo extends Document {
  title: string
  description?: string
  url: string
  image: string
  uploadedDate: Date
  tags: string[]
  metadata: {
    duration: number
  }
  currentPlayTime: number
  playCount: number
  played: boolean
  lastPlayed?: Date
}

import { Document } from 'mongoose'

export interface MetaData {
  duration: number
}

export interface IVideo extends Document {
  title: string
  description?: string
  url: string
  image: string
  uploadedDate: Date
  tags: string[]
  metadata: MetaData
  currentPlayTime: number
  playCount: number
  lastPlayed?: Date
}

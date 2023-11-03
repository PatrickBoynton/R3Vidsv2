export type Metadata = {
  duration: number
}

export type IVideo = {
  _id: string
  description: string
  metadata: Metadata
  tags: string[]
  title: string
  uploadDate?: Date
  url: string
  image: string
  played: boolean
  playCount: number
  lastPlayed: Date | undefined
}

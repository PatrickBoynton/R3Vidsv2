import axios from 'axios'
import { create } from 'zustand'
import { IVideo } from '../interfaces/interfaces'

type VideoApiState = {
  videos: IVideo[]
  playedVideos: IVideo[]
  randomVideo: IVideo | undefined
}

type Action = {
  getVideos: (keyword: string) => Promise<void>
  getPlayedVideos: () => Promise<void>
  getRandomVideo: () => Promise<void>
  deletePlayedVideos: () => Promise<void>
}

export const useVideoApiStore = create<VideoApiState & Action>(set => ({
  videos: [],
  playedVideos: [],
  randomVideo: undefined,
  getVideos: async (keyword: string) => {
    let response = await axios.get<IVideo[]>('/api/videos')
    if (keyword)
      response = await axios.get(`/api/videos/search?title=${keyword}`)
    set({ videos: response.data })
  },
  getPlayedVideos: async () => {
    const response = await axios.get<IVideo[]>('/api/videos/played')
    set({ playedVideos: response.data })
  },
  getRandomVideo: async () => {
    const response = await axios.get<IVideo>('/api/videos/random')
    set({ randomVideo: response.data })
  },
  deletePlayedVideos: async () => {
    await axios.delete('/api/videos/random')
    set({ playedVideos: [] })
  },
}))

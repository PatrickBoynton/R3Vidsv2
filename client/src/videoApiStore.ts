import axios from 'axios'
import { create } from 'zustand'
import { IVideo } from './interfaces/interfaces'

interface VideoApiState {
  videos: IVideo[]
  playedVideos: IVideo[]
  randomVideo: IVideo | null
}

const useVideoApiStore = create<VideoApiState>(set => ({
  videos: [],
  playedVideos: [],
  randomVideo: null,
  getVideos: async () => {
    const response = await axios.get<IVideo[]>('/api/videos')
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

export default useVideoApiStore

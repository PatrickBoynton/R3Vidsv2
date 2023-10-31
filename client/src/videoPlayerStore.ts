import { create } from 'zustand'
import { Metadata } from './interfaces/interfaces'

interface VideoPlayerState {
  playing: boolean
  url: string
  volume: number
  currentIndex: number
  title: string
  description: string
  metaData: Metadata
  currentPlayTime: number
  playCount: number
  lastPlayed: Date
}

const useVideoPlayerStore = create<VideoPlayerState>(set => ({
  playing: false,
  url: '',
  volume: 0,
  currentIndex: 0,
  title: '',
  description: '',
  metaData: { duration: 0 },
  currentPlayTime: 0,
  playCount: 0,
  lastPlayed: new Date(),
  setPlaying: () => {
    set(state => ({ playing: !state.playing }))
  },
  setUrl: (url: string) => {
    set(() => ({ url }))
  },
  setVolume: (volume: number) => {
    set(() => ({ volume }))
  },
  setCurrentIndex: (currentIndex: number) => {
    set(() => ({ currentIndex }))
  },
  setTitle: (title: string) => {
    set(() => ({ title }))
  },
  setDescription: (description: string) => {
    set(() => ({ description }))
  },
  setMetaData: (metaData: Metadata) => {
    set(() => ({ metaData }))
  },
  setCurrentPlayTime: (currentPlayTime: number) => {
    set(() => ({ currentPlayTime }))
  },
  setPlayCount: (playCount: number) => {
    set(() => ({ playCount }))
  },
  setLastPlayed: (lastPlayed: Date) => {
    set(() => ({ lastPlayed }))
  },
}))

export default useVideoPlayerStore

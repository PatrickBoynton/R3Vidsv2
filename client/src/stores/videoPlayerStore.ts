import { create } from 'zustand'
import { Metadata } from '../interfaces/interfaces'

interface VideoPlayerState {
  playing: boolean
  url: string
  volume: number
  muted: boolean
  fullScreen: boolean
  currentIndex: number
  progress: number
  title: string
  description: string
  metaData: Metadata
  currentPlayTime: number
  playCount: number
  lastPlayed: Date
  setPlaying: () => void
  setUrl: (url: string) => void
  setVolume: (volume: number) => void
  setMuted: (muted: boolean) => void
  setFullScreen: () => void
  setCurrentIndex: (currentIndex: number) => void
  setProgress: (progress: number) => void
  setTitle: (title: string) => void
  setDescription: (description: string) => void
  setMetaData: (metaData: Metadata) => void
  setCurrentPlayTime: (currentPlayTime: number) => void
  setPlayCount: (playCount: number) => void
  setLastPlayed: (lastPlayed: Date) => void
}

const useVideoPlayerStore = create<VideoPlayerState>(set => ({
  playing: false,
  url: '',
  volume: 0,
  muted: false,
  fullScreen: false,
  currentIndex: 0,
  progress: 0,
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
  setMuted: (muted: boolean) => {
    set(() => ({ muted }))
  },
  setFullScreen: () => {
    set(state => ({ fullScreen: !state.fullScreen }))
  },
  setCurrentIndex: (currentIndex: number) => {
    set(() => ({ currentIndex }))
  },
  setProgress: (progress: number) => {
    set(() => ({ progress }))
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

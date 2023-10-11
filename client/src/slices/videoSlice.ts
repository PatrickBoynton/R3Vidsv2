import { createSlice } from '@reduxjs/toolkit'
import { IVideo } from '../interfaces/interfaces'

interface VideoPlayer {
  playing: boolean
  volume: number
  fullScreen: boolean
  muted: boolean
  isEnded: boolean
}

type VideoState = IVideo & VideoPlayer

const initialState: VideoState = {
  _id: '',
  url: '',
  image: '',
  title: '',
  description: '',
  metadata: { duration: 0 },
  tags: [],
  played: false,
  playing: true,
  volume: 0,
  fullScreen: false,
  muted: false,
  playCount: 0,
  isEnded: false
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoSrc: (state, action) => {
      state.url = action.payload
    },
    setVideoTitle: (state, action) => {
      state.title = action.payload
    },
    setVideoDescription: (state, action) => {
      state.description = action.payload
    },
    setVideoMetadata: (state, action) => {
      state.metadata = action.payload
    },
    setVideoTags: (state, action) => {
      state.tags = action.payload
    },
    setVideoPlayed: (state, action) => {
      state.played = action.payload
    },
    setVideoPlaying: state => {
      state.playing = !state.playing
    },
    setVideoVolume: (state, action) => {
      state.volume = action.payload
    },
    setVideoFullScreen: state => {
      state.fullScreen = !state.fullScreen
    },
    setVideoMuted: state => {
      state.muted = !state.muted
    },
    setPlayCount: (state, action) => {
      state.playCount = action.payload
    },
    setIsEnded: (state, action) => {
      state.isEnded = action.payload
    }
  },
})

export const {
  setVideoSrc,
  setVideoTitle,
  setVideoDescription,
  setVideoMetadata,
  setVideoTags,
  setVideoPlayed,
  setVideoPlaying,
  setVideoFullScreen,
  setVideoVolume,
  setVideoMuted,
  setIsEnded
} = videoSlice.actions

export default videoSlice.reducer

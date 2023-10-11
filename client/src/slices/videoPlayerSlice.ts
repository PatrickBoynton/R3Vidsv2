import { createSlice } from '@reduxjs/toolkit'

interface VideoPlayerState {
  sliderValue: number;
  currentTime: number;
  duration: number;
  playing: boolean;
  playerWidth: string;
  currentIndex: number;
  dimensions: { width: string; height: string };
  isFullScreen: boolean;
  isEnded: boolean;
}

const initialState: VideoPlayerState = {
  sliderValue: 0,
  currentTime: 0,
  duration: 0,
  playing: false,
  playerWidth: '800px',
  currentIndex: 0,
  dimensions: {width: '100%', height: '100%'},
  isFullScreen: false,
  isEnded: false
}

const videoPlayerSlice =  createSlice({
  name: "player",
  initialState,
  reducers: {
    setSliderValue: (state, action) =>{
      state.sliderValue = action.payload
    },
    setCurrentTime: (state, action) => {
      state.currentIndex = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    setPlayerWidth: (state, action) => {
      state.playerWidth = action.payload
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload
    },
    setDimensions: (state, action) => {
      state.dimensions = action.payload
    },
    setIsFullScreen: (state, action) => {
      state.isFullScreen = action.payload
    },
    setIsEnded: (state, action) => {
      state.isEnded = action.payload
    }
  }
})

export const {
  setSliderValue,
  setCurrentTime,
  setDuration,
  setPlaying,
  setPlayerWidth,
  setCurrentIndex,
  setDimensions,
  setIsFullScreen,
} = videoPlayerSlice.actions

export default videoPlayerSlice.reducer
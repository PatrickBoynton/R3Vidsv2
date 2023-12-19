import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videosFromFilter: [],
  playedVideos: [],
  filteredVideos: []
}

export const videoFilterSlice =  createSlice({
  name: 'arrays',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videosFromFilter = action.payload
    },
    setPlayedVideos: (state, action) => {
      state.playedVideos = action.payload
    },
    setFilteredVideos: (state, action) => {
      state.filteredVideos = action.payload
    }
  }
})

export const { setVideos, setPlayedVideos, setFilteredVideos } = videoFilterSlice.actions

export default videoFilterSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import { videoApiSlice } from './slices/videoApiSlice'
import videoReducer from './slices/videoSlice'
import { videoFilterSlice } from './slices/videoFilterSlice'
import videoPlayerReducer from './slices/videoPlayerSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    videos: videoApiSlice.reducer,
    video: videoReducer,
    player: videoPlayerReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store

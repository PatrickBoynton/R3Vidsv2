import { apiSlice } from './apiSlice'
import { IVideo } from '../interfaces/interfaces'

export const videoApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getVideos: builder.query<IVideo[], any>({
      query: ({ keyword = '' }) => {
        let url = '/';

        if (keyword) {
          url = `/search?title=${keyword}`;
        }
        return {
          url,
          params: {
            keyword,
          },
        };
      },
    }),
    getRandomVideo: builder.query<IVideo, void>({
      query: () => ({
        url: '/random',
      }),
    }),
    getPlayedVideos: builder.query<IVideo[], any>({
      query: ({ keyword = ''}) => ({
        url: '/played',
        params: {
          keyword,
        },
      }),
    }),
    deletePlayedVideos: builder.mutation({
      query: () => ({
        url: '/random',
        method: 'DELETE'
      })
    }),
    updateVideo: builder.mutation({
      query: ({ _id, updatedData }) => ({
        url: `/edit/${_id}`,
        method: 'PUT',
        body: updatedData
      })
    }),
    uploadVideo: builder.mutation<string, FormData>({
      query: (formData: FormData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const {
  useGetVideosQuery,
  useGetRandomVideoQuery,
  useGetPlayedVideosQuery,
  useUploadVideoMutation,
  useDeletePlayedVideosMutation,
} = videoApiSlice

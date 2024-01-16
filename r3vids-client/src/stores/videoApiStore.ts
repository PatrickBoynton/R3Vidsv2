import { create } from 'zustand'
import agent from '../agent.ts'
import { Video } from '../types/types.ts'

type VideoState = {
	videos: Video[] | null
	playedVideos: Video[] | null
	randomVideo: Video | null
	previousVideo: Video | null
	randomPlayedVideo: Video | null
	currentIndex: number
	searchTerm: string
	getVideos: (searchTerm?: string) => void
	getPlayedVideos: () => void
	getRandomVideo: () => void
	getPreviousVideo: () => void
	getRandomPlayedVideo: () => void
	deletePlayedVideos: () => void
	updateVideo: (video: Partial<Video>) => void
	setCurrentIndex: (index: number) => void
}

export const useVideoApiStore = create<VideoState>(set => ({
	videos: null,
	playedVideos: null,
	randomPlayedVideo: null,
	currentIndex: 0,
	randomVideo: null,
	previousVideo: null,
	searchTerm: '',
	getVideos: async (searchTerm = '') => {
		const videos = await agent.Videos.list(searchTerm)
		set(state => ({ ...state, searchTerm }))
		set(state => ({ ...state, videos }))
	},
	getPlayedVideos: async () => {
		const playedVideos = await agent.Videos.played()
		set(state => ({ ...state, playedVideos }))
	},
	getRandomVideo: async () => {
		const randomVideo = await agent.Videos.random()
		set(state => ({ ...state, randomVideo }))
	},
	getPreviousVideo: async () => {
		const previousVideo = await agent.Videos.previous()
		set(state => ({ ...state, previousVideo }))
	},
	getRandomPlayedVideo: async () => {
		const randomPlayedVideo = await agent.Videos.randomPlayed()
		set(state => ({ ...state, randomPlayedVideo }))
	},
	updateVideo: async (video: Partial<Video>) => {
		agent.Videos.update(video)
		// Updates the regular list.
		// Gets and sets the newly updated played list to state.
		const playedVideos = await agent.Videos.played()
		if (playedVideos.length > 0) set({ playedVideos })

		set(state => ({
			...state,
			videos: state.videos?.map(v =>
				// If the updated video is equal to the passed in,
				// spread it to the state, if it is the only one,then add it as is.
				v._id === video._id ? { ...v, ...video } : v,
			),
		}))
	},
	deletePlayedVideos: async () => {
		set({ playedVideos: [] })
		await agent.Videos.delete()
	},
	setCurrentIndex: (index: number) => {
		if (index >= 0 && index !== -1) {
			const nonNegativeIndex = Math.max(0, index)

			set(state => ({
				...state,
				currentIndex: nonNegativeIndex,
			}))
		}
	},
}))

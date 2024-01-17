import { useVideoPropertyStore } from './videoPropertyStore'
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
		if (searchTerm.length > 0) set(state => ({ ...state, searchTerm }))
		set(state => ({ ...state, videos }))
	},
	getPlayedVideos: async () => {
		const playedVideos = await agent.Videos.played()
		set(state => ({ ...state, playedVideos }))
	},
	getRandomVideo: async () => {
		const randomVideo = await agent.Videos.random()

		set(state => ({ ...state, randomVideo }))
		useVideoApiStore.getState().getPlayedVideos()
		useVideoApiStore.getState().getVideos()
		useVideoPropertyStore.getState().setVideoProperties(randomVideo)
	},
	getPreviousVideo: async () => {
		const previousVideo = await agent.Videos.previous()
		set(state => ({ ...state, previousVideo }))
		useVideoPropertyStore.getState().setVideoProperties(previousVideo)
	},
	getRandomPlayedVideo: async () => {
		const randomPlayedVideo = await agent.Videos.randomPlayed()
		set(state => ({ ...state, randomPlayedVideo }))
		useVideoApiStore.getState().getPlayedVideos()
		useVideoPropertyStore.getState().setVideoProperties(randomPlayedVideo)
	},
	updateVideo: async (video: Partial<Video>) => {
		await agent.Videos.update(video)
		useVideoApiStore.getState().getPlayedVideos()
		useVideoApiStore.getState().getVideos()
	},
	deletePlayedVideos: async () => {
		set({ playedVideos: [] })
		await agent.Videos.delete()
		useVideoApiStore.getState().getVideos()
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

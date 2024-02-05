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
	currentIndex: number | null
	searchTerm: string
	randomFilterDuration: string
	randomFilterLength: string
	getVideos: (searchTerm?: string) => void
	getPlayedVideos: () => void
	getRandomVideo: (duration: string, length: string) => void
	getPreviousVideo: () => void
	getRandomPlayedVideo: () => void
	deletePlayedVideos: () => void
	updateVideo: (video: Partial<Video>) => void
	setCurrentIndex: (index: number, video?: Video) => void
	setRandomFilterDuration: (randomFilterDuration: string) => void
	setRandomFilterLength: (randomFilterLength: string) => void
}

export const useVideoApiStore = create<VideoState>(set => ({
	videos: null,
	playedVideos: null,
	randomPlayedVideo: null,
	currentIndex: 0,
	randomVideo: null,
	previousVideo: null,
	searchTerm: '',
	randomFilterDuration: '',
	randomFilterLength: '',
	getVideos: async (searchTerm = '') => {
		const videos = await agent.Videos.list(searchTerm)
		const playedVideos = useVideoApiStore.getState().playedVideos
		if (searchTerm.length > 0 || videos) {
			set(state => ({
				...state,
				searchTerm,
				videos,
				playedVideos,
			}))
		}
	},
	getPlayedVideos: async () => {
		const playedVideos = await agent.Videos.played()
		set(state => ({ ...state, playedVideos }))
	},
	getRandomVideo: async (duration: string, length: string) => {
		const randomVideo = await agent.Videos.random(duration, length)

		useVideoPropertyStore.getState().setVideoProperties(randomVideo)

		set(state => ({ ...state, randomVideo }))
	},
	getPreviousVideo: async () => {
		const previousVideo = await agent.Videos.previous()
		const videos = useVideoApiStore.getState().videos
		const playedVideos = useVideoApiStore.getState().playedVideos

		set(state => ({ ...state, previousVideo, videos, playedVideos }))
		useVideoPropertyStore.getState().setVideoProperties(previousVideo)
	},
	getRandomPlayedVideo: async () => {
		const randomPlayedVideo = await agent.Videos.randomPlayed()

		set(state => ({ ...state, randomPlayedVideo }))

		useVideoPropertyStore.getState().setVideoProperties(randomPlayedVideo)
	},
	updateVideo: async (video: Partial<Video>) => {
		await agent.Videos.update(video)
		if (video.metadata) {
			useVideoPropertyStore.getState().setVideoProperties(video as Video)
		}
		set(state => ({ ...state }))
	},
	deletePlayedVideos: async () => {
		await agent.Videos.delete()
		set(state => ({ ...state, playedVideos: [] }))
	},
	setCurrentIndex: (index: number, video?: Video) => {
		if (index !== -1) {
			const videos = useVideoApiStore.getState().videos
			const currentIndex =
				(videos?.findIndex(vid => vid._id === video?._id) as number) || index

			set(state => ({
				...state,
				currentIndex,
			}))
			useVideoPropertyStore.getState().setVideoProperties(video)
		}
	},
	setRandomFilterDuration: (randomFilterDuration: string) => {
		set(state => ({ ...state, randomFilterDuration }))
	},
	setRandomFilterLength: (randomFilterLength: string) => {
		set(state => ({ ...state, randomFilterLength }))
	},
}))

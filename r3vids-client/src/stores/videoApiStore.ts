import { create } from 'zustand'
import agent from '../agent.ts'
import { Video } from '../types/types.ts'

type VideoState = {
	videos: Video[] | null
	playedVideos: Video[] | null
	randomVideo: Video | null
	randomPlayedVideo: Video | null
	currentIndex: number
	getVideos: () => void
	getPlayedVideos: () => void
	getRandomVideo: () => void
	getRandomPlayedVideo: () => void
	deletePlayedVideos: () => void
	setCurrentIndex: (index: number) => void
}
export const useVideoApiStore = create<VideoState>(set => ({
	videos: null,
	playedVideos: null,
	randomPlayedVideo: null,
	currentIndex: 0,
	randomVideo: null,
	getVideos: async () => {
		const videos = await agent.Videos.list()
		set({ videos })
	},
	getPlayedVideos: async () => {
		const videos = await agent.Videos.played()
		set({ playedVideos: videos })
	},
	getRandomVideo: async () => {
		const randomVideo = await agent.Videos.random()
		set({ randomVideo })
	},
	getRandomPlayedVideo: async () => {
		const randomPlayedVideo = await agent.Videos.randomPlayed()
		set({ randomPlayedVideo })
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

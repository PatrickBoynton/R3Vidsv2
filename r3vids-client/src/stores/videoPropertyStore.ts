import { create } from 'zustand'
import { MetaData, Video } from '../types/types.ts'

type VideoPropertyState = {
	title: string
	description: string
	url: string
	image: string
	uploadDate: string
	tags: string[]
	metadata: MetaData
	played: boolean
	currentPlayTime: number
	playCount: number
	lastPlayed: Date | null
	setCurrentPlayTime: (currentPlayTime: number) => void
	setVideoProperties: (video: Video | undefined | null) => void
}

export const useVideoPropertyStore = create<VideoPropertyState>(set => ({
	title: '',
	description: '',
	url: '',
	image: '',
	uploadDate: '',
	tags: [],
	metadata: {
		duration: 0,
	},
	played: false,
	currentPlayTime: 0,
	playCount: 0,
	lastPlayed: null,
	setCurrentPlayTime: (currentPlayTime: number) => {
		set({ currentPlayTime })
	},
	setVideoProperties: (video: Video | null | undefined) => {
		if (video) {
			set({
				title: video.title,
				description: video.description,
				url: video.url,
				image: video.image,
				uploadDate: video.uploadDate,
				tags: video.tags,
				metadata: video.metadata,
				played: video.played,
				currentPlayTime: video.currentPlayTime,
				playCount: video.playCount,
				lastPlayed: video.lastPlayed,
			})
		}
	},
}))

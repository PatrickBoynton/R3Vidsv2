import { useVideoApiStore } from '../../../../stores/videoApiStore'
import { Video } from '../../../../types/types'

export const getAndSetVideos = (index: number, video: Video) => {
	useVideoApiStore.getState().getPlayedVideos()
	useVideoApiStore.getState().setCurrentIndex(index, video)
}
export const goForward = (newIndex: number, videos: Video[]) => {
	const newVideo = videos[newIndex]
	useVideoApiStore.getState().updateVideo({
		_id: newVideo._id,
		lastPlayed: new Date(),
		played: true,
		playCount: newVideo.playCount + 1,
	})

	getAndSetVideos(newIndex, newVideo)
}

export const goBackward = (newIndex: number, videos: Video[]) => {
	const previousVideo = videos[newIndex]
	useVideoApiStore.getState().updateVideo({
		_id: previousVideo._id,
		lastPlayed: new Date(),
		played: true,
		playCount: previousVideo.playCount + 1,
	})
	getAndSetVideos(newIndex, previousVideo)
}
export const navigateToNextVideo = (
	currentIndex: number,
	direction: boolean = false,
) => {
	const videos = useVideoApiStore.getState().videos

	if (videos && currentIndex !== undefined) {
		let newIndex: number

		if (direction) {
			newIndex = (currentIndex + 1) % (videos.length - 1)
			goForward(newIndex, videos)
		} else {
			newIndex = (currentIndex + (videos.length - 1)) % videos.length
			goBackward(newIndex, videos)
		}
	}
}

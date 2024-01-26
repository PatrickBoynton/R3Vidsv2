import { RefObject } from 'react'
import ReactPlayer from 'react-player'
import { useReactPlayerStore } from '../../../../stores/reactPlayerStore'
import { useVideoApiStore } from '../../../../stores/videoApiStore'
import { useVideoPropertyStore } from '../../../../stores/videoPropertyStore'

export const handleTogglePlay = (vidRef: RefObject<ReactPlayer>): void => {
	const player = vidRef.current?.getInternalPlayer()
	const playing = useReactPlayerStore.getState().playing
	const randomVideo = useVideoApiStore.getState().randomVideo
	const previousVideo = useVideoApiStore.getState().previousVideo

	if (player && playing) {
		player.pause()
		const currentTime = vidRef.current?.getCurrentTime()

		if (randomVideo) {
			useVideoApiStore.getState().updateVideo({
				_id: randomVideo?._id,
				currentPlayTime: currentTime,
			})
		} else if (previousVideo) {
			useVideoApiStore.getState().updateVideo({
				_id: previousVideo?._id,
				currentPlayTime: currentTime,
			})
		}
		useVideoPropertyStore.getState().setCurrentPlayTime(currentTime as number)
	} else {
		player?.play()
	}
	useReactPlayerStore.getState().togglePlay()
}

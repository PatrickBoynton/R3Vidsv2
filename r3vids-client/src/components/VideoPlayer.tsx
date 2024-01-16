import ReactPlayer from 'react-player'
import Controls from './controls/Controls.tsx'
import { useVideoPropertyStore } from '../stores/videoPropertyStore.ts'
import { useRef } from 'react'

const VideoPlayer = () => {
	const { url, currentPlayTime } = useVideoPropertyStore()
	const vidRef = useRef<ReactPlayer | null>(null)

	const handleStart = () => {
		try {
			vidRef.current?.seekTo(currentPlayTime)
		} catch (e) {
			console.error('HandleStart: ', e)
		}
	}
	return (
		<>
			<ReactPlayer
				controls
				url={url}
				ref={vidRef}
				onStart={() => handleStart()}
			/>
			<Controls vidRef={vidRef} />
		</>
	)
}

export default VideoPlayer

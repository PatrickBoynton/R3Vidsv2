import { useRef } from 'react'
import { useVideoPropertyStore } from '../stores/videoPropertyStore.ts'
import Controls from './controls/Controls.tsx'

const VideoPlayer = () => {
	const { url, currentPlayTime } = useVideoPropertyStore()
	const vidRef = useRef<HTMLVideoElement>(null)

	const handleStart = () => {
		try {
			if (vidRef.current) vidRef.current.currentTime = currentPlayTime
		} catch (e) {
			console.error('HandleStart: ', e)
		}
	}
	return (
		<>
			<video
				height="600px"
				width="100%"
				src={url}
				ref={vidRef}
				onLoadedMetadata={handleStart}
			/>
			<Controls vidRef={vidRef.current as HTMLVideoElement} />
		</>
	)
}

export default VideoPlayer

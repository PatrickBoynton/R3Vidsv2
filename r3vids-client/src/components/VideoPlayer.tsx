import ReactPlayer from 'react-player'
import Controls from './controls/Controls.tsx'
import { useVideoPropertyStore } from '../stores/videoPropertyStore.ts'
import { useRef } from 'react'

const VideoPlayer = () => {
	const { url } = useVideoPropertyStore()
	const vidRef = useRef<ReactPlayer | null>(null)

	return (
		<>
			<ReactPlayer controls url={url} ref={vidRef} />
			<Controls vidRef={vidRef} />
		</>
	)
}

export default VideoPlayer

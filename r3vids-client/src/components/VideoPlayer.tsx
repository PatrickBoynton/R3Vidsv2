import ReactPlayer from 'react-player'
import Controls from './controls/Controls.tsx'
import { useRef } from 'react'
import { useVideoPropertyStore } from '../stores/videoPropertyStore.ts'
import { useVideoApiStore } from '../stores/videoApiStore.ts'

const VideoPlayer = () => {
	const { url } = useVideoPropertyStore()
	const { randomVideo } = useVideoApiStore()
	const vidRef = useRef(null)
	return (
		<>
			<ReactPlayer controls url={url || randomVideo?.url} ref={vidRef} />
			<Controls vidRef={vidRef} />
		</>
	)
}

export default VideoPlayer

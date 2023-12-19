import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
import ControlIcon from '../ControlIcon.tsx'
import CachedIcon from '@mui/icons-material/Cached'
const RandomPlayed = () => {
	const { randomPlayedVideo, getRandomPlayedVideo, getPlayedVideos } =
		useVideoApiStore()
	const { setVideoProperties } = useVideoPropertyStore()
	const handleRandomPlayedVideo = () => {
		getRandomPlayedVideo()
		getPlayedVideos()
		setVideoProperties(randomPlayedVideo)
	}
	return (
		<ControlIcon
			onClick={handleRandomPlayedVideo}
			icon={<CachedIcon color="secondary" sx={{ fontSize: '48px' }} />}
		/>
	)
}

export default RandomPlayed

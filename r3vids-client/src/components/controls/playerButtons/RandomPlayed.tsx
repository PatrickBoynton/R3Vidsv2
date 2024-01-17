import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import ControlIcon from '../ControlIcon.tsx'
import CachedIcon from '@mui/icons-material/Cached'
const RandomPlayed = () => {
	const { getRandomPlayedVideo } = useVideoApiStore()
	const handleRandomPlayedVideo = () => {
		getRandomPlayedVideo()
	}
	return (
		<ControlIcon
			onClick={handleRandomPlayedVideo}
			icon={<CachedIcon color="secondary" sx={{ fontSize: '48px' }} />}
		/>
	)
}

export default RandomPlayed

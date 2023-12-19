import ControlIcon from '../ControlIcon.tsx'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
import { iconStyles } from '../../../styles.ts'

const RandomButton = () => {
	const { getRandomVideo, randomVideo, getPlayedVideos } = useVideoApiStore()
	const { setVideoProperties } = useVideoPropertyStore()
	const handleGetRandomVideo = () => {
		getRandomVideo()
		getPlayedVideos()
		setVideoProperties(randomVideo)
	}

	return (
		<ControlIcon
			onClick={handleGetRandomVideo}
			icon={<ShuffleIcon sx={iconStyles} />}
		/>
	)
}

export default RandomButton

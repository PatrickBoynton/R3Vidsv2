import ControlIcon from '../ControlIcon.tsx'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { iconStyles } from '../../../styles.ts'

const RandomButton = () => {
	const { getRandomVideo, randomFilterDuration, randomFilterLength } =
		useVideoApiStore()
	const handleGetRandomVideo = () => {
		getRandomVideo(randomFilterDuration, randomFilterLength)
	}
	return (
		<ControlIcon
			onClick={handleGetRandomVideo}
			icon={<ShuffleIcon sx={iconStyles} />}
		/>
	)
}

export default RandomButton

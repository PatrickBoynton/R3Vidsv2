import ControlIcon from '../ControlIcon.tsx'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { iconStyles } from '../../../styles.ts'
import { useEffect } from 'react'

const RandomButton = () => {
	const { getRandomVideo, randomVideo, getPlayedVideos } = useVideoApiStore()
	const handleGetRandomVideo = () => {
		getRandomVideo()
		getPlayedVideos()
	}
	useEffect(() => {
		getPlayedVideos()
	}, [randomVideo, getPlayedVideos])
	return (
		<ControlIcon
			onClick={handleGetRandomVideo}
			icon={<ShuffleIcon sx={iconStyles} />}
		/>
	)
}

export default RandomButton

import ControlIcon from '../ControlIcon.tsx'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
import { iconStyles } from '../../../styles.ts'
import { useEffect } from 'react'

const RandomButton = () => {
	const { getRandomVideo, randomVideo, getPlayedVideos } = useVideoApiStore()
	const { setVideoProperties } = useVideoPropertyStore()
	const handleGetRandomVideo = () => {
		getRandomVideo()
		getPlayedVideos()
		setVideoProperties(randomVideo)
	}
	useEffect(() => {
		getPlayedVideos()
		setVideoProperties(randomVideo)
	}, [randomVideo, getPlayedVideos, setVideoProperties])
	return (
		<ControlIcon
			onClick={handleGetRandomVideo}
			icon={<ShuffleIcon sx={iconStyles} />}
		/>
	)
}

export default RandomButton

import ControlIcon from '../ControlIcon.tsx'
import { Backspace } from '@mui/icons-material'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { iconStyles } from '../../../styles.ts'

const DeletePlayed = () => {
	const { deletePlayedVideos } = useVideoApiStore()

	const handleDeletePlayedVideos = () => {
		deletePlayedVideos()
	}

	return (
		<ControlIcon
			onClick={() => handleDeletePlayedVideos()}
			icon={<Backspace sx={iconStyles} />}
		/>
	)
}

export default DeletePlayed

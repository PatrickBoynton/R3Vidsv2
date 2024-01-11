import ControlIcon from '../ControlIcon.tsx'
import { Backspace } from '@mui/icons-material'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { iconStyles } from '../../../styles.ts'

const DeletePlayed = () => {
	const { deletePlayedVideos, getVideos } = useVideoApiStore()

	const handleDeletePlayedVideos = async () => {
		await deletePlayedVideos()
		await getVideos()
	}

	return (
		<ControlIcon
			onClick={() => handleDeletePlayedVideos()}
			icon={<Backspace sx={iconStyles} />}
		/>
	)
}

export default DeletePlayed

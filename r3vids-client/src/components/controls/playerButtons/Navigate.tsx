import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
import ControlIcon from '../ControlIcon.tsx'
import { SkipNext, SkipPrevious } from '@mui/icons-material'

type Props = {
	forward?: boolean
	currentIndex: number
}

const Navigate = ({ forward = false, currentIndex }: Props) => {
	const { videos, setCurrentIndex } = useVideoApiStore()
	const { setVideoProperties } = useVideoPropertyStore()
	const goToNextItem = (currentIndex: number) => {
		if (videos && currentIndex) {
			const newIndex = (currentIndex + 1) % videos.length
			const nextVideo = videos[newIndex]
			setCurrentIndex(newIndex)
			setVideoProperties(nextVideo)
		}
	}

	const goToPreviousItem = (currentIndex: number) => {
		if (videos && currentIndex) {
			let newIndex = (currentIndex - 1 + videos.length) % videos.length
			setCurrentIndex(newIndex)
			const previousVideo = videos[newIndex]
			setVideoProperties(previousVideo)
		}
	}

	const handleNextVideo = (currentIndex: number): any => {
		goToNextItem(currentIndex)
	}

	const handlePreviousVideo = (currentIndex: number): any => {
		goToPreviousItem(currentIndex)
	}
	return (
		<ControlIcon
			onClick={() =>
				forward
					? handleNextVideo(currentIndex)
					: handlePreviousVideo(currentIndex)
			}
			icon={
				forward ? (
					<SkipNext color="secondary" sx={{ fontSize: '48px' }} />
				) : (
					<SkipPrevious color="secondary" sx={{ fontSize: '48px' }} />
				)
			}
		/>
	)
}

export default Navigate

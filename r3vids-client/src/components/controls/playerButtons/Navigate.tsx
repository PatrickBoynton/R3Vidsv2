import { useEffect } from 'react'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
import { Video } from '../../../types/types.ts'
import ControlIcon from '../ControlIcon.tsx'
import { SkipNext, SkipPrevious } from '@mui/icons-material'

type Props = {
	forward?: boolean
	currentIndex: number
}

const Navigate = ({ forward = false, currentIndex }: Props) => {
	const { videos, setCurrentIndex } = useVideoApiStore()
	const { setVideoProperties } = useVideoPropertyStore()

	const setVideo = (newIndex: number, newVideo: Video) => {
		setCurrentIndex(newIndex)
		setVideoProperties(newVideo)
	}

	const navigateToNextVideo = (
		currentIndex: number,
		direction: boolean = false,
	) => {
		if (videos && currentIndex !== undefined) {
			let newIndex: number = 0
			if (direction) {
				newIndex = (currentIndex + 1) % (videos.length - 1)
				const newVideo = videos[newIndex]
				setVideo(newIndex, newVideo)
			} else {
				newIndex = (currentIndex - 1 + (videos.length - 1)) % videos.length
				const previousVideo = videos[newIndex]
				setVideo(newIndex, previousVideo)
			}
		}
	}

	return (
		<ControlIcon
			onClick={() =>
				forward
					? navigateToNextVideo(currentIndex, forward)
					: navigateToNextVideo(currentIndex)
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

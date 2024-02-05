import PlayToggle from './playerButtons/TogglePlay/PlayToggle.tsx'
import ReactPlayer from 'react-player'
import RandomButton from './playerButtons/RandomButton.tsx'
import DeletePlayed from './playerButtons/DeletePlayed.tsx'
import FullScreenToggle from './playerButtons/FullScreen.tsx'
import MuteToggle from './playerButtons/MuteToggle.tsx'
import Progress from './playerButtons/Progress.tsx'
import { RefObject, useEffect } from 'react'
import Navigate from './playerButtons/Navigate/Navigate.tsx'
import { useVideoApiStore } from '../../stores/videoApiStore.ts'
import RandomPlayed from './playerButtons/RandomPlayed.tsx'
import { Box } from '@mui/material'
import { RandomTimeFilter } from '../RandomTimeFilter.tsx'

type Props = {
	vidRef: RefObject<ReactPlayer>
}

const Controls = ({ vidRef }: Props) => {
	const { currentIndex, randomVideo, videos, setCurrentIndex } =
		useVideoApiStore()
	const initialIndex = videos?.findIndex(
		video => randomVideo?._id === video._id,
	) as number

	useEffect(() => {
		setCurrentIndex(initialIndex)
	}, [setCurrentIndex, initialIndex])
	return (
		<Box display="flex" flexDirection="column">
			<Box>
				<Navigate currentIndex={Number(currentIndex)} />
				<PlayToggle vidRef={vidRef} />
				<Navigate forward currentIndex={Number(currentIndex)} />
			</Box>
			<Progress vidRef={vidRef} />
			<Box>
				<MuteToggle vidRef={vidRef} />
				<FullScreenToggle vidRef={vidRef} />
				<RandomTimeFilter />
				<RandomButton />
				<RandomPlayed />
				<DeletePlayed />
			</Box>
		</Box>
	)
}

export default Controls

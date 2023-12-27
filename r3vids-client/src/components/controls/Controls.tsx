import PlayToggle from './playerButtons/PlayToggle.tsx'
import ReactPlayer from 'react-player'
import RandomButton from './playerButtons/RandomButton.tsx'
import DeletePlayed from './playerButtons/DeletePlayed.tsx'
import FullScreenToggle from './playerButtons/FullScreen.tsx'
import MuteToggle from './playerButtons/MuteToggle.tsx'
import Progress from './playerButtons/Progress.tsx'
import { RefObject, useEffect } from 'react'
import Navigate from './playerButtons/Navigate.tsx'
import { useVideoApiStore } from '../../stores/videoApiStore.ts'
import RandomPlayed from './playerButtons/RandomPlayed.tsx'

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
		<>
			<Navigate currentIndex={Number(currentIndex)} />
			<PlayToggle vidRef={vidRef} />
			<Navigate forward currentIndex={Number(currentIndex)} />
			<Progress vidRef={vidRef} />
			<MuteToggle vidRef={vidRef} />
			<FullScreenToggle vidRef={vidRef} />
			<RandomButton />
			<RandomPlayed />
			<DeletePlayed />
		</>
	)
}

export default Controls

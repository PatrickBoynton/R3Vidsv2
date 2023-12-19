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
	const { setCurrentIndex, randomVideo, videos } = useVideoApiStore()
	const currentIndex = videos?.findIndex(
		video => video._id === randomVideo?._id,
	) as number

	useEffect(() => {
		if (currentIndex === undefined || currentIndex === null) {
			setCurrentIndex(0)
		}

		setCurrentIndex(currentIndex)
	}, [currentIndex])
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

import ControlIcon from '../ControlIcon.tsx'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ReactPlayer from 'react-player'
import { iconStyles } from '../../../styles.ts'
import { RefObject, useEffect } from 'react'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'

type Props = {
	vidRef: RefObject<ReactPlayer>
}

const PlayToggle = ({ vidRef }: Props) => {
	const { togglePlay, playing } = useReactPlayerStore()
	const { setCurrentPlayTime } = useVideoPropertyStore()
	const { updateVideo, randomVideo, previousVideo } = useVideoApiStore()
	const player = vidRef.current?.getInternalPlayer()
	const handleTogglePlay = (): void => {
		if (player && playing) {
			player.pause()
			const currentTime = vidRef.current?.getCurrentTime()

			if (randomVideo) {
				updateVideo({
					_id: randomVideo?._id,
					currentPlayTime: currentTime,
				})
			} else if (previousVideo) {
				updateVideo({
					_id: previousVideo?._id,
					currentPlayTime: currentTime,
				})
			}
			setCurrentPlayTime(currentTime as number)
		} else {
			player?.play()
		}
		togglePlay()
	}
	return (
		<ControlIcon
			onClick={() => handleTogglePlay()}
			icon={
				!playing ? (
					<PlayArrowIcon sx={iconStyles} />
				) : (
					<PauseIcon sx={iconStyles} />
				)
			}
		/>
	)
}

export default PlayToggle

import ControlIcon from '../ControlIcon.tsx'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ReactPlayer from 'react-player'
import { iconStyles } from '../../../styles.ts'
import { RefObject } from 'react'
import { useVideoApiStore } from '../../../stores/videoApiStore.ts'

type Props = {
	vidRef: RefObject<ReactPlayer>
}

const PlayToggle = ({ vidRef }: Props) => {
	const { togglePlay, playing } = useReactPlayerStore()
	const { updateVideo } = useVideoApiStore()
	const handleTogglePlay = (): void => {
		const player = vidRef.current?.getInternalPlayer()

		if (player && playing) {
			player.pause()
			const currentPlayTime = vidRef.current?.getCurrentTime()
			updateVideo({ currentPlayTime })
		} else {
			player?.play()
		}
		togglePlay()
	}
	return (
		<ControlIcon
			onClick={handleTogglePlay}
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

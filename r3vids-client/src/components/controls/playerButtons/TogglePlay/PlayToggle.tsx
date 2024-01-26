import ControlIcon from '../../ControlIcon.tsx'
import { useReactPlayerStore } from '../../../../stores/reactPlayerStore.ts'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ReactPlayer from 'react-player'
import { iconStyles } from '../../../../styles.ts'
import { RefObject } from 'react'
import { handleTogglePlay } from './togglePlayMethods.ts'

type Props = {
	vidRef: RefObject<ReactPlayer>
}

const PlayToggle = ({ vidRef }: Props) => {
	const { playing } = useReactPlayerStore()

	return (
		<ControlIcon
			onClick={() => handleTogglePlay(vidRef)}
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

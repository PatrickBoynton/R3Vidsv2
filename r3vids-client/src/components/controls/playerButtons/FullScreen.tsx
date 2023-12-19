import ReactPlayer from 'react-player'
import ControlIcon from '../ControlIcon.tsx'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { RefObject, useState } from 'react'
import { iconStyles } from '../../../styles.ts'
type Props = {
	vidRef: RefObject<ReactPlayer>
}

const FullScreenToggle = ({ vidRef }: Props) => {
	const { _, fullScreen } = useReactPlayerStore()
	const [___, setFullScreen] = useState(false)
	const handleToggleFullScreen = (vidRef: RefObject<ReactPlayer>) => {
		vidRef.current?.getInternalPlayer().requestFullscreen()
		setFullScreen(true)
	}
	return (
		<ControlIcon
			onClick={() => handleToggleFullScreen(vidRef)}
			icon={
				fullScreen ? (
					<FullscreenExitIcon sx={iconStyles} />
				) : (
					<FullscreenIcon sx={iconStyles} />
				)
			}
		/>
	)
}

export default FullScreenToggle

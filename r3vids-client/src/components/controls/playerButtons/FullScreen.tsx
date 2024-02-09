import ControlIcon from '../ControlIcon.tsx'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { useState } from 'react'
import { iconStyles } from '../../../styles.ts'
type Props = {
	vidRef: HTMLVideoElement
}

const FullScreenToggle = ({ vidRef }: Props) => {
	const { _, fullScreen } = useReactPlayerStore()
	const [___, setFullScreen] = useState(false)
	const handleToggleFullScreen = (vidRef: HTMLVideoElement) => {
		if (!fullScreen && vidRef.requestFullscreen) {
			vidRef.requestFullscreen()
			setFullScreen(true)
			vidRef.controls = true
		} else {
			document.exitFullscreen()
			setFullScreen(false)
			vidRef.controls = false
		}
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

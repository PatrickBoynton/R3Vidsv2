import ReactPlayer from 'react-player'
import {  useState } from 'react'
import ControlIcon from '../ControlIcon.tsx'
import { VolumeMute, VolumeUp } from '@mui/icons-material'
import { iconStyles } from '../../../styles.ts'

type Props = {
	vidRef: HTMLVideoElement
}

const MuteToggle = ({ vidRef }: Props) => {
	const [muted, setMuted] = useState(false)
	
	const handleMute = () => {
		const player = vidRef

		if (player && player.muted) {
			setMuted(false)
			player.muted = false
		} else if (player && !player.muted) {
			setMuted(true)
			player.muted = true
		}
	}

	return (
		<ControlIcon
			onClick={handleMute}
			icon={
				!muted ? <VolumeUp sx={iconStyles} /> : <VolumeMute sx={iconStyles} />
			}
		/>
	)
}

export default MuteToggle

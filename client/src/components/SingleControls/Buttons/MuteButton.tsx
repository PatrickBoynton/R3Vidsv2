import { VolumeDown, VolumeUp } from '@mui/icons-material'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'
import { useVideoPlayerStore } from '../../../stores/videoPlayerStore'

interface Props {
  vidRef: any
}

const MuteButton = ({ vidRef }: Props) => {
  const { setMuted, muted } = useVideoPlayerStore()

  const handleMute = (): void => {
    setMuted(!muted)

    if (vidRef.current) {
      const internalPlayer = vidRef.current.getInternalPlayer()
      if (internalPlayer) internalPlayer.muted = !muted
    }
  }
  return (
    <Icon
      onClick={handleMute}
      icon={
        !muted ? <VolumeUp sx={IconStyles} /> : <VolumeDown sx={IconStyles} />
      }
    />
  )
}

export default MuteButton

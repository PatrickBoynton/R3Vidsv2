import { VolumeDown, VolumeUp } from '@mui/icons-material'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'
import useVideoPlayerStore from '../../../videoPlayerStore'

interface Props {
  vidRef: any
}

const MuteButton = ({ vidRef }: Props) => {
  const setMuted = useVideoPlayerStore(state => state.setMuted)
  const muted = useVideoPlayerStore(state => state.muted)

  const handleMute = (): void => {
    setMuted(true)
    if (vidRef.current.getInternalPlayer().muted) {
      vidRef.current.getInternalPlayer().muted = false
      setMuted(false)
    } else {
      vidRef.current.getInternalPlayer().muted = true
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

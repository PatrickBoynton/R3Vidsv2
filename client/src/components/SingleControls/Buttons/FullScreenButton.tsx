import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import useVideoPlayerStore from '../../../stores/videoPlayerStore'

interface Props {
  vidRef: any
}

const FullScreenButton = ({ vidRef }: Props) => {
  const { setFullScreen } = useVideoPlayerStore()

  const handleFullScreenToggle = (e: any): void => {
    setFullScreen()
    if (vidRef.current) {
      vidRef.current.getInternalPlayer().requestFullscreen()
    }
  }
  return (
    <Icon
      onClick={handleFullScreenToggle}
      icon={<FullscreenIcon sx={IconStyles} />}
    />
  )
}

export default FullScreenButton

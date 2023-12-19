import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { useState } from 'react'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'

interface Props {
  vidRef: any
}

const FullScreenButton = ({ vidRef }: Props) => {
  const [fullScreen, setFullScreen] = useState(false)
  const handleFullScreenToggle = (e: any): void => {
    setFullScreen(true)
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

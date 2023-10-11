import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'


interface Props {
    vidRef: any
}

const FullScreenButton = ({vidRef}: Props) => {
  const [fullScreen, setFullScreen] = useState(false)
  const handleFullScreenToggle = (e: any): void => {
    setFullScreen(true)
    if (vidRef.current) {
      vidRef.current.getInternalPlayer().requestFullscreen()
    }
  }
    return <IconButton onClick={handleFullScreenToggle} children={<FullscreenIcon sx={IconStyles} />} />
}

export default FullScreenButton
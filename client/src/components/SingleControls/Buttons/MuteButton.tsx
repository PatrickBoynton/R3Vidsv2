import { IconButton } from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { useState } from 'react'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'


interface Props {
  vidRef: any
}

const MuteButton = ({vidRef}: Props) => {
  const [muted, setMuted] = useState(false)
  const handleMute = (): void => {
    setMuted(true)
    if(vidRef.current.getInternalPlayer().muted){
      vidRef.current.getInternalPlayer().muted = false
      setMuted(false)
    } else {
      vidRef.current.getInternalPlayer().muted = true
    }
  }
    return <Icon onClick={handleMute} icon={!muted ? <VolumeUp sx={IconStyles} /> : <VolumeDown sx={IconStyles} />} />
}

export default MuteButton
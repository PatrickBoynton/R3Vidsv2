import { PauseCircle, PlayArrow } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../../slices/videoPlayerSlice'
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'


const PlayPause = () => {
  const playing = useSelector((state: any) => state.player.playing)
  const dispatch = useDispatch()
  const handlePlayPause = (): void => {
    dispatch(setPlaying(!playing))
  }
  const playPause = !playing ? (
    <PlayArrow sx={IconStyles} />
  ) : (
    <PauseCircle sx={IconStyles} />
  )
    return <Icon onClick={handlePlayPause} icon={playPause} />
}

export default PlayPause
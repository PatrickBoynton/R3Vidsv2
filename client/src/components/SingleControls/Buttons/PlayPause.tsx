import { PauseCircle, PlayArrow } from '@mui/icons-material'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'
import useVideoPlayerStore from '../../../videoPlayerStore'

const PlayPause = () => {
  const playing = useVideoPlayerStore(state => state.playing)
  const setPlaying = useVideoPlayerStore(state => state.setPlaying)
  const handlePlayPause = (): void => {
    setPlaying()
  }
  const playPause = !playing ? (
    <PlayArrow sx={IconStyles} />
  ) : (
    <PauseCircle sx={IconStyles} />
  )
  return <Icon onClick={handlePlayPause} icon={playPause} />
}

export default PlayPause

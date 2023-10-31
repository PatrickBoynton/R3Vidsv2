import { PauseCircle, PlayArrow } from '@mui/icons-material'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'

const PlayPause = () => {
  const handlePlayPause = (): void => {}
  const playPause = !playing ? (
    <PlayArrow sx={IconStyles} />
  ) : (
    <PauseCircle sx={IconStyles} />
  )
  return <Icon onClick={handlePlayPause} icon={playPause} />
}

export default PlayPause

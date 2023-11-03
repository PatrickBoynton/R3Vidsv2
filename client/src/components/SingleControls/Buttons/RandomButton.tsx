import ShuffleIcon from '@mui/icons-material/Shuffle'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import useVideoApiStore from '../../../stores/videoApiStore'
import useVideoPlayerStore from '../../../stores/videoPlayerStore'

const RandomButton = () => {
  const { getRandomVideo, randomVideo } = useVideoApiStore()

  const { setTitle, setUrl } = useVideoPlayerStore()

  const onRandomClick = async (): Promise<void> => {
    getRandomVideo()
    setTitle(randomVideo?.title as string)
    setUrl(randomVideo?.url as string)
  }
  return (
    <Icon
      icon={<ShuffleIcon sx={IconStyles} />}
      onClick={() => onRandomClick()}
    />
  )
}

export default RandomButton

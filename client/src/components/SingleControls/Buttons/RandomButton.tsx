import ShuffleIcon from '@mui/icons-material/Shuffle'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import useVideoApiStore from '../../../videoApiStore'
import useVideoPlayerStore from '../../../videoPlayerStore'

const RandomButton = () => {
  const randomVideo = useVideoApiStore(state => state.randomVideo)
  const getRandomVideo = useVideoApiStore(state => state.getRandomVideo)

  const setTitle = useVideoPlayerStore(state => state.setTitle)
  const setUrl = useVideoPlayerStore(state => state.setUrl)

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

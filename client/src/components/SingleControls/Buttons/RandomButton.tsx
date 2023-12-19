import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useDispatch } from 'react-redux'
import { setVideoSrc, setVideoTitle } from '../../../slices/videoSlice'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import { setCurrentIndex } from '../../../slices/videoPlayerSlice'
import useVideoManegment from '../../../hooks/useVideoManegment'

const RandomButton = () => {
  const { videos, randomVideo, reVids, rePlayed } = useVideoManegment()

  const dispatch = useDispatch()

  const onRandomClick = async (): Promise<void> => {
    const index = videos?.findIndex(item => item.title === randomVideo?.title)
    reVids()
    rePlayed()
    dispatch(setVideoTitle(randomVideo?.title))
    dispatch(setVideoSrc(randomVideo?.url))
    dispatch(setCurrentIndex(index))
  }
  return (
    <Icon
      icon={<ShuffleIcon sx={IconStyles} />}
      onClick={() => onRandomClick()}
    />
  )
}

export default RandomButton

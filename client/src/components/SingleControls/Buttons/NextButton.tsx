import SkipNextIcon from '@mui/icons-material/SkipNext'
import { IVideo } from '../../../interfaces/interfaces'
import { setVideoSrc, setVideoTitle } from '../../../slices/videoSlice'
import { useDispatch } from 'react-redux'
import { setCurrentIndex } from '../../../slices/videoPlayerSlice'
import { useParams } from 'react-router'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import useVideoManegment from '../../../hooks/useVideoManegment'

interface Props {
  currentIndex: number
}

const NextButton = ({ currentIndex }: Props) => {
  const { keyword } = useParams()
  const { videos } = useVideoManegment(keyword)
  const dispatch = useDispatch()

  const goToNextItem = (currentIndex: number): void => {
    if (videos && videos.length > 0) {
      const newIndex = (currentIndex + 1) % videos.length
      dispatch(setCurrentIndex(newIndex))

      const nextVideo: IVideo = videos[newIndex]
      dispatch(setVideoSrc(nextVideo.url))
      dispatch(setVideoTitle(nextVideo.title))
    }
  }

  const handleNextVideo = (currentIndex: number): void => {
    goToNextItem(currentIndex)
  }
  return (
    <Icon
      onClick={() => handleNextVideo(currentIndex)}
      icon={<SkipNextIcon sx={IconStyles} />}
    />
  )
}

export default NextButton

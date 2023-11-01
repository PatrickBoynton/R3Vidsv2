import SkipNextIcon from '@mui/icons-material/SkipNext'
import { IVideo } from '../../../interfaces/interfaces'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import useVideoApiStore from '../../../videoApiStore'
import useVideoPlayerStore from '../../../videoPlayerStore'

const NextButton = () => {
  const videos = useVideoApiStore(state => state.videos)
  const currentIndex = useVideoPlayerStore(state => state.currentIndex)
  const setCurrentIndex = useVideoPlayerStore(state => state.setCurrentIndex)
  const setTitle = useVideoPlayerStore(state => state.setTitle)
  const setUrl = useVideoPlayerStore(state => state.setUrl)

  const goToNextItem = (currentIndex: number): void => {
    if (videos && videos.length > 0) {
      const newIndex = (currentIndex + 1) % videos.length
      setCurrentIndex(newIndex)

      const nextVideo: IVideo = videos[newIndex]
      setTitle(nextVideo.title)
      setUrl(nextVideo.url)
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

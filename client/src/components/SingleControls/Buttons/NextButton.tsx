import SkipNextIcon from '@mui/icons-material/SkipNext'
import { IVideo } from '../../../interfaces/interfaces'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'
import { useVideoApiStore } from '../../../stores/videoApiStore'
import { useVideoPlayerStore } from '../../../stores/videoPlayerStore'

const NextButton = () => {
  const { videos } = useVideoApiStore()
  const { currentIndex, setCurrentIndex, setTitle, setUrl } =
    useVideoPlayerStore()

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

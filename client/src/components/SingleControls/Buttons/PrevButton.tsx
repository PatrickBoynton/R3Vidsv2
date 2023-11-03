import { SkipPrevious } from '@mui/icons-material'
import { IVideo } from '../../../interfaces/interfaces'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'
import { useVideoApiStore } from '../../../stores/videoApiStore'
import { useVideoPlayerStore } from '../../../stores/videoPlayerStore'

const PrevButton = () => {
  const { videos } = useVideoApiStore()
  const { currentIndex, setCurrentIndex, setTitle, setUrl } =
    useVideoPlayerStore()

  const goToPreviousItem = (currentIndex: number): void => {
    if (videos && videos.length > 0) {
      let newIndex = (currentIndex - 1 + videos.length) % videos.length
      setCurrentIndex(newIndex)

      const previousVideo: IVideo = videos[newIndex]
      setTitle(previousVideo.title)
      setUrl(previousVideo.url)
    }
  }

  const handlePreviousVideo = (currentIndex: number): void => {
    goToPreviousItem(currentIndex)
  }
  return (
    <Icon
      onClick={() => handlePreviousVideo(currentIndex)}
      icon={<SkipPrevious sx={IconStyles} />}
    />
  )
}

export default PrevButton

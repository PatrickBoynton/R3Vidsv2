import { SkipPrevious } from '@mui/icons-material'
import { IVideo } from '../../../interfaces/interfaces'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'
import useVideoManegment from '../../../hooks/useVideoManegment'

interface Props {
  currentIndex: number
}

const PrevButton = ({ currentIndex }: Props) => {
  const { keyword } = useParams()
  const { videos } = useVideoManegment(keyword)

  const dispatch = useDispatch()

  const goToPreviousItem = (currentIndex: number): void => {
    if (videos && videos.length > 0) {
      let newIndex = (currentIndex - 1 + videos.length) % videos.length

      const previousVideo: IVideo = videos[newIndex]
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

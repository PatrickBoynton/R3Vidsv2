import { SkipPrevious } from '@mui/icons-material'
import { IVideo } from '../../../interfaces/interfaces'
import { setVideoSrc, setVideoTitle } from '../../../slices/videoSlice'
import { useDispatch } from 'react-redux'
import { setCurrentIndex } from '../../../slices/videoPlayerSlice'
import { useGetVideosQuery } from '../../../slices/videoApiSlice'
import { useParams } from 'react-router'
import Icon from './Icon'
import { IconStyles } from '../../../utils/styles'

interface Props {
  currentIndex: any
}

const PrevButton = ({currentIndex}: Props) => {
  const { keyword } = useParams()
  const { data: videos } = useGetVideosQuery({ keyword })
  const dispatch= useDispatch()

  const goToPreviousItem = (currentIndex: number): void => {
    if (videos && videos.length > 0) {
      let newIndex = (currentIndex - 1 + videos.length) % videos.length
      dispatch(setCurrentIndex(newIndex))

      const previousVideo: IVideo = videos[newIndex]

      dispatch(setVideoSrc(previousVideo.url))
      dispatch(setVideoTitle(previousVideo.title))
    }
  }

  const handlePreviousVideo = (currentIndex: number): void => {
    goToPreviousItem(currentIndex)
  }
    return <Icon onClick={() => handlePreviousVideo(currentIndex)} icon={<SkipPrevious  sx={IconStyles} />} />
}

export default PrevButton
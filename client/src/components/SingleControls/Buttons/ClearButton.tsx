import Icon from './Icon'
import { HighlightOff } from '@mui/icons-material'
import { IconStyles } from '../../../utils/styles'
import { useVideoApiStore } from '../../../stores/videoApiStore'

const ClearButton = () => {
  const { deletePlayedVideos } = useVideoApiStore()

  const handleDeletePlayedVideos = async () => {
    deletePlayedVideos()
  }
  return (
    <Icon
      icon={<HighlightOff sx={IconStyles} onClick={handleDeletePlayedVideos} />}
    />
  )
}

export default ClearButton

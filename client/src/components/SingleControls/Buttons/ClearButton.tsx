
import Icon from './Icon'
import { HighlightOff } from '@mui/icons-material'
import { IconStyles } from '../../../utils/styles'
import { useDeletePlayedVideosMutation } from '../../../slices/videoApiSlice'
import useVideoManegment from '../../../hooks/useVideoManegment'

const ClearButton = () => {
  const [deletePlayedVideos] = useDeletePlayedVideosMutation()
  const { rePlayed, reVids } = useVideoManegment()
  const handleDeletePlayedVideos = async () => {
    try {
      await deletePlayedVideos({})
      rePlayed()
      reVids()
    } catch(e: any) {
      console.error(e)
    }
  }
    return <Icon icon={<HighlightOff sx={IconStyles} onClick={handleDeletePlayedVideos} />} />
}

export default ClearButton
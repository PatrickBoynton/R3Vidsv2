import Icon from './Icon'
import { HighlightOff } from '@mui/icons-material'
import { IconStyles } from '../../../utils/styles'

const ClearButton = () => {
  const handleDeletePlayedVideos = async () => {
    try {
    } catch (e: any) {
      console.error(e)
    }
  }
  return (
    <Icon
      icon={<HighlightOff sx={IconStyles} onClick={handleDeletePlayedVideos} />}
    />
  )
}

export default ClearButton

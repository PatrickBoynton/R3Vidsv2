import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useDispatch } from 'react-redux'
import { IconStyles } from '../../../utils/styles'
import Icon from './Icon'

const RandomButton = () => {
  const onRandomClick = async (): Promise<void> => {}
  return (
    <Icon
      icon={<ShuffleIcon sx={IconStyles} />}
      onClick={() => onRandomClick()}
    />
  )
}

export default RandomButton

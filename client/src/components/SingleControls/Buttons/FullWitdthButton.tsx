import FitScreenIcon from '@mui/icons-material/FitScreen'
import { IconButton } from '@mui/material'
import { IconStyles } from '../../../utils/styles'


const FullWitdthButton = () => {
  const handleWidthToggle = (): void => {}
    return <IconButton onClick={handleWidthToggle}>
      <FitScreenIcon sx={IconStyles} />
    </IconButton>
}

export default FullWitdthButton
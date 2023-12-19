import FileUploader from './SingleControls/FileUploader'
import SearchBox from './SingleControls/Search'
import ClearButton from './SingleControls/Buttons/ClearButton'
import { Box } from '@mui/material'

const Util = () => {
    return <Box sx={{display: 'flex'}}>
      <FileUploader />
      <SearchBox  />
      <ClearButton />
    </Box>
}

export default Util
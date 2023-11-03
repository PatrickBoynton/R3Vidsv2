import { Box, Typography } from '@mui/material'
import { TextColors } from '../../utils/styles'
import PlayedVideosList from './PlayedVideosList'
import AllVideosList from './AllVideosList'

const VideoList = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography paragraph sx={TextColors}>
            {}
          </Typography>
        </Box>
        <Typography color="secondary" variant="h3">
          {}
        </Typography>
        <PlayedVideosList />
        <Typography color="secondary" paragraph>
          {}
        </Typography>
        <Typography color="secondary" variant="h3">
          All Videos
        </Typography>
        <AllVideosList />
      </Box>
    </>
  )
}
export default VideoList

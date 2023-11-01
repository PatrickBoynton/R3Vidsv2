import { Box, Typography } from '@mui/material'
import { TextColors } from '../../utils/styles'
import PlayedVideosList from './PlayedVideosList'
import AllVideosList from './AllVideosList'

interface Props {
  played?: boolean
}

const VideoList = ({ played = false }: Props) => {
  const handleVideoStuff = async (
    src: string,
    title: string,
    duration: number
  ): Promise<void> => {}

  return (
    <>
      <Box>
        <Box>
          <Typography paragraph sx={TextColors}>
            {null}
          </Typography>
        </Box>
        <Typography color="secondary" variant="h3">
          {null}
        </Typography>
        <PlayedVideosList onVideoClick={handleVideoStuff} />
        <Typography color="secondary" paragraph>
          {}
        </Typography>
        <Typography color="secondary" variant="h3">
          All Videos
        </Typography>
        <AllVideosList onVideoClick={handleVideoStuff} />
      </Box>
    </>
  )
}
export default VideoList

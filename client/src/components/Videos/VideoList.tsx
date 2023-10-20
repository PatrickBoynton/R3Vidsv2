import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import {
  setVideoMetadata,
  setVideoSrc,
  setVideoTitle,
} from '../../slices/videoSlice'
import { TextColors } from '../../utils/styles'
import useVideoManegment from '../../hooks/useVideoManegment'
import PlayedVideosList from './PlayedVideosList'
import AllVideosList from './AllVideosList'

interface Props {
  played?: boolean
}

const VideoList = ({ played = false }: Props) => {
  const { keyword } = useParams()

  const { videos, playedVideos, refetch, reVids } = useVideoManegment(keyword)

  const dispatch = useDispatch()

  const handleVideoStuff = async (
    src: string,
    title: string,
    duration: number
  ): Promise<void> => {
    dispatch(setVideoSrc(src))
    dispatch(setVideoTitle(title))
    dispatch(setVideoMetadata(duration))
    // refetch()
    reVids()
  }

  return (
    <>
      <Box>
        <Box>
          <Typography paragraph sx={TextColors}>
            {playedVideos?.length}
          </Typography>
        </Box>
        <Typography color="secondary" variant="h3">
          Played Videos
        </Typography>
        <PlayedVideosList
          playedVideos={playedVideos}
          onVideoClick={handleVideoStuff}
        />
        <Typography color="secondary" paragraph>
          {videos?.length}
        </Typography>
        <Typography color="secondary" variant="h3">
          All Videos
        </Typography>
        <AllVideosList videos={videos} onVideoClick={handleVideoStuff} />
      </Box>
    </>
  )
}
export default VideoList

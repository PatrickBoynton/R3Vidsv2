import { Grid } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'
import useVideoApiStore from '../../videoApiStore'

interface Props {
  onVideoClick: any
}

const AllVideosList = ({ onVideoClick }: Props) => {
  const videos = useVideoApiStore(state => state.videos)
  return (
    <Grid container spacing={2}>
      {videos?.map(video => (
        <Grid item key={video._id || video.title} xs={12} sm={6} md={4} lg={3}>
          <VideoItem video={video} onVideoClick={onVideoClick} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AllVideosList

import { Grid } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'
import { useVideoApiStore } from '../../stores/videoApiStore'

const AllVideosList = () => {
  const { videos } = useVideoApiStore()

  return (
    <Grid container spacing={2}>
      {videos?.map(video => (
        <Grid item key={video._id || video.title} xs={12} sm={6} md={4} lg={3}>
          <VideoItem video={video} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AllVideosList

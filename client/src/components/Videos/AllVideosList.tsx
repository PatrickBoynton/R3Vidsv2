import { Grid } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'
import { IVideo } from '../../interfaces/interfaces'

interface Props {
  videos: IVideo[] | null
  onVideoClick: any
}

const AllVideosList = ({ videos, onVideoClick }: Props) => {
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

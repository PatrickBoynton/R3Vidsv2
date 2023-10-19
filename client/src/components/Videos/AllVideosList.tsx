import { List } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'
import { IVideo } from '../../interfaces/interfaces'

interface Props {
  videos: IVideo[] | null
  onVideoClick: any
}

const AllVideosList = ({ videos, onVideoClick }: Props) => {
  
  return (
    <List>
      {videos?.map(video => (
        <VideoItem
          key={video._id || video.title}
          video={video}
          onVideoClick={onVideoClick}
        />
      ))}
    </List>
  )
}

export default AllVideosList

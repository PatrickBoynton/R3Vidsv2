import { IVideo } from '../../interfaces/interfaces'
import { List } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'

interface Props {
  playedVideos: IVideo[] | null
  onVideoClick: any
}

const PlayedVideosList = ({playedVideos, onVideoClick}: Props) => {
    return <List>
      {playedVideos?.map(video => (
        <VideoItem
          key={video._id || video.title}
          video={video}
          onVideoClick={onVideoClick}
        />
      ))}
    </List>
}

export default PlayedVideosList
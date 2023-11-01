import { List } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'
import useVideoApiStore from '../../videoApiStore'

interface Props {
  onVideoClick: any
}

const PlayedVideosList = ({ onVideoClick }: Props) => {
  const playedVideos = useVideoApiStore(state => state.playedVideos)
  const played = playedVideos?.slice()

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        whiteSpace: 'nowrap ',
      }}
    >
      {played
        ?.sort(
          (a, b) =>
            ((new Date(String(b.lastPlayed)).getTime() as number) -
              new Date(String(a.lastPlayed)).getTime()) as number
        )
        .map(video => (
          <VideoItem
            key={video._id || video.title}
            video={video}
            onVideoClick={onVideoClick}
          />
        ))}
    </List>
  )
}

export default PlayedVideosList

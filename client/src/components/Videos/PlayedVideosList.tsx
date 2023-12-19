import { IVideo } from '../../interfaces/interfaces'
import { List } from '@mui/material'
import VideoItem from '../SingleControls/VideoItem'

interface Props {
  playedVideos: IVideo[] | null
  onVideoClick: any
}

const PlayedVideosList = ({ playedVideos, onVideoClick }: Props) => {
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

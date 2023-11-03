import { IVideo, Metadata } from '../../interfaces/interfaces'
import { ListItem, Typography, Button, Box } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import Icon from './Buttons/Icon'
import { IconStyles } from '../../utils/styles'
import useVideoPlayerStore from '../../stores/videoPlayerStore'
interface Props {
  video: IVideo
}

const VideoItem = ({ video }: Props) => {
  const { setUrl, setTitle, setMetaData } = useVideoPlayerStore()

  const handleVideoClick = (url: string, title: string, metadata: Metadata) => {
    setUrl(url)
    setTitle(title)
    setMetaData(metadata)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      key={video._id || video.title}
    >
      <ListItem>
        <Typography variant="h5" color="secondary">
          {video.title}
        </Typography>
      </ListItem>
      <ListItem>
        <img src={video.image} alt={video.title} />
      </ListItem>
      <ListItem>
        <Typography>{String(video.lastPlayed)}</Typography>
      </ListItem>
      <ListItem>
        <Button
          onClick={() => {
            handleVideoClick(video.url, video.title, video.metadata)
          }}
        >
          {video.url}
        </Button>
        <Icon icon={<ControlPointIcon sx={IconStyles} />} />
      </ListItem>
    </Box>
  )
}

export default VideoItem

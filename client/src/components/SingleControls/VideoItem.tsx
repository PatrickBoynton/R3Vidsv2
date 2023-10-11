import React from 'react'
import { IVideo } from '../../interfaces/interfaces'
import { ListItem, Typography, Button, IconButton } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import Icon from './Buttons/Icon'
import { IconStyles } from '../../utils/styles'
interface Props {
  video: IVideo
  onVideoClick: (src: string, title: string, duration: number) => void
}

const VideoItem = ({ video, onVideoClick }: Props) => {
  return (
    <React.Fragment key={video._id || video.title}>
      <ListItem>
        <Typography variant="h5" color="secondary">{video.title}</Typography>
      </ListItem>
      <ListItem>
        <img src={video.image} />
      </ListItem>
      <ListItem>
        <Button
          onClick={() => {
            onVideoClick(video.url, video.title, video.metadata.duration)
          }}
        >
          {video.url}
        </Button>
        <Icon icon={<ControlPointIcon sx={IconStyles}/>} />
      </ListItem>
    </React.Fragment>
  )
}

export default VideoItem

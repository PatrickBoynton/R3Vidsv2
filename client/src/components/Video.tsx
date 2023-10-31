import { useRef } from 'react'
import ReactPlayer from 'react-player'
import Controls from './Controls'
import { Box, Typography } from '@mui/material'
const VideoPlayer = () => {
  const vidRef = useRef<ReactPlayer>(null)

  // For the initial random video
  const handleRandomVideo = async (
    url: any,
    title: any,
    metadata: any
  ): Promise<void> => {}

  // FOR REACT PLAYER
  const handleDuration = (duration: number): void => {}
  const handleProgress = (state: any): void => {}

  const handleEnded = (): void => {}

  return (
    <>
      <Typography color="secondary" variant="h2">
        {}
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ width: '100%' }}>
          <ReactPlayer
            playing={false}
            height="350px"
            url={}
            ref={vidRef}
            muted={true}
            volume={0}
            autoPlay
            onDuration={handleDuration}
            onProgress={handleProgress}
            onEnded={handleEnded}
            controls
          />
        </Box>
        <Controls vidRef={vidRef} />
      </Box>
    </>
  )
}
export default VideoPlayer

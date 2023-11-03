import { useRef } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import Controls from './Controls'
import { Box, Typography } from '@mui/material'
import { useVideoApiStore } from '../stores/videoApiStore'
import { useVideoPlayerStore } from '../stores/videoPlayerStore'
const VideoPlayer = () => {
  const { randomVideo, getRandomVideo } = useVideoApiStore()
  const { setCurrentPlayTime, setProgress } = useVideoPlayerStore()

  const vidRef = useRef(null)

  // FOR REACT PLAYER
  const handleDuration = (duration: number): void => {
    setCurrentPlayTime(duration)
  }
  const handleProgress = (state: ReactPlayerProps): void => {
    const { played } = state
    setProgress(played)
  }

  const handleEnded = (): void => {
    getRandomVideo()
  }

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
            url={randomVideo?.url}
            ref={vidRef}
            muted={true}
            volume={0}
            clear
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

import { useEffect, useRef } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import Controls from './Controls'
import { Box, Typography } from '@mui/material'
import useVideoApiStore from '../videoApiStore'
import useVideoPlayerStore from '../videoPlayerStore'
const VideoPlayer = () => {
  const randomVideo = useVideoApiStore(state => state.randomVideo)
  const getRandomVideo = useVideoApiStore(state => state.getRandomVideo)
  const setCurrentPlayTime = useVideoPlayerStore(
    state => state.setCurrentPlayTime
  )
  const setProgress = useVideoPlayerStore(state => state.setProgress)
  const vidRef = useRef<ReactPlayer>(null)

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

  // For the initial random video
  useEffect(() => {
    getRandomVideo()
  }, [getRandomVideo])

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

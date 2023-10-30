import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import {
  setVideoPlaying,
  setVideoSrc,
  setVideoTitle,
  setVideoMetadata,
  setIsEnded,
} from '../slices/videoSlice'
import Controls from './Controls'
import { Box, Typography } from '@mui/material'
import {
  setCurrentIndex,
  setCurrentTime,
  setDuration,
} from '../slices/videoPlayerSlice'
import useVideoManegment from '../hooks/useVideoManegment'
import { useParams } from 'react-router'
import { setPlayedVideos } from '../slices/videoFilterSlice'
const VideoPlayer = () => {
  const { keyword } = useParams()
  const { videos, randomVideo, refetch, reVids } = useVideoManegment(keyword)

  const playing: boolean = useSelector((state: any) => state.player.playing)

  const vidRef = useRef<ReactPlayer>(null)

  const src = useSelector((state: any) => state.video.url)
  const title = useSelector((state: any) => state.video.title)
  const dimensions = useSelector((state: any) => state.player.dimensions)
  const currentIndex = useSelector((state: any) => state.player.currentIndex)

  const dispatch = useDispatch()

  // For the initial random video
  const handleRandomVideo = async (
    url: any = '',
    title: any = '',
    metadata: any = ''
  ): Promise<void> => {
    dispatch(setVideoSrc(url))
    dispatch(setVideoTitle(title))
    dispatch(setVideoMetadata(metadata.duration))
    await refetch()
    await reVids()
  }

  useEffect((): void => {
    const test = () => {
      if (randomVideo && !currentIndex) {
        handleRandomVideo(
          randomVideo?.url,
          randomVideo?.title,
          randomVideo?.metadata
        )
      }
    }
    test()
  }, [])

  useEffect((): void => {
    if (videos && !currentIndex) {
      const initialIndex: number = videos.findIndex(
        video => video._id === randomVideo?._id
      )
      if (initialIndex !== -1) dispatch(setCurrentIndex(initialIndex))
    }
  }, [videos, randomVideo?._id, currentIndex, dispatch])

  // FOR REACT PLAYER
  const handleDuration = (duration: number): void => {
    dispatch(setDuration(duration))
  }
  const handleProgress = (state: any): void => {
    dispatch(setCurrentTime(state.playedSeconds))
  }

  const handleEnded = (): void => {
    dispatch(setIsEnded(true))
    handleRandomVideo(
      randomVideo?.url,
      randomVideo?.title,
      randomVideo?.metadata
    )
  }

  return (
    <>
      <Typography color="secondary" variant="h2">
        {title || randomVideo?.title}
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Box sx={dimensions}>
          <ReactPlayer
            playing={playing}
            height="350px"
            url={src || randomVideo?.url}
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

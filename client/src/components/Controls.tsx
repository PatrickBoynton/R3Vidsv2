import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { IVideo } from '../interfaces/interfaces'
import PrevButton from './SingleControls/Buttons/PrevButton'
import PlayPause from './SingleControls/Buttons/PlayPause'
import NextButton from './SingleControls/Buttons/NextButton'
import SliderControls from './SingleControls/Buttons/SliderControls'
import MuteButton from './SingleControls/Buttons/MuteButton'
import RandomButton from './SingleControls/Buttons/RandomButton'
import FullScreenButton from './SingleControls/Buttons/FullScreenButton'
import { setCurrentIndex, setPlaying } from '../slices/videoPlayerSlice'
import { useGetRandomVideoQuery, useGetVideosQuery } from '../slices/videoApiSlice'
import { useParams } from 'react-router'
import { divStyles } from '../utils/styles'
import { Box } from '@mui/material'

interface Props {
  vidRef: any
  randomVideo: IVideo | null
}


const Controls = ({vidRef, randomVideo}: Props) => {
  const currentIndex = useSelector((state: any) => state.player.currentIndex)
  return (
    <Box style={divStyles}>
      <PrevButton currentIndex={currentIndex} />
      <PlayPause />
      <NextButton currentIndex={currentIndex} />
      <MuteButton vidRef={vidRef} />
      <RandomButton />
      <FullScreenButton vidRef={vidRef} />
    </Box>
  )
}
export default Controls

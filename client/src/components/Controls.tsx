import PrevButton from './SingleControls/Buttons/PrevButton'
import PlayPause from './SingleControls/Buttons/PlayPause'
import NextButton from './SingleControls/Buttons/NextButton'
import MuteButton from './SingleControls/Buttons/MuteButton'
import RandomButton from './SingleControls/Buttons/RandomButton'
import FullScreenButton from './SingleControls/Buttons/FullScreenButton'
import { divStyles } from '../utils/styles'
import { Box } from '@mui/material'

interface Props {
  vidRef: any
}

const Controls = ({ vidRef }: Props) => {
  return (
    <Box style={divStyles}>
      <PrevButton currentIndex={} />
      <PlayPause />
      <NextButton currentIndex={} />
      <MuteButton vidRef={vidRef} />
      <RandomButton />
      <FullScreenButton vidRef={vidRef} />
    </Box>
  )
}
export default Controls

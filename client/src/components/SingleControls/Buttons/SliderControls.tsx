import { Box, Slider, Typography } from '@mui/material'

const timerStyles = { padding: '0 20px 0 20px' }

const SliderControls = () => {
  const handleSliderChange = (
    event: Event,
    newValue: number | number[]
  ): void => {
    if (typeof newValue === 'number') {
    }
  }
  const convertSecondsToDuration = (duration: number): any => {
    // return new Date(duration * 1000).toISOString().substring(11, 23)
  }
  return (
    <Box style={{ display: 'flex' }}>
      {/* <Typography color="secondary" sx={timerStyles}>
        {convertSecondsToDuration(
          Number(currentTime > 0 ? currentTime + 1 : currentTime)
        )}
      </Typography> */}
      <Slider
        // value={currentTime}
        min={0}
        // max={duration}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        size="small"
      />
      <Typography color="secondary" sx={timerStyles}>
        {/* {convertSecondsToDuration(Math.floor(duration))} */}
      </Typography>
    </Box>
  )
}

export default SliderControls

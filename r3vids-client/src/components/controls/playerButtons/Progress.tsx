import { RefObject, SyntheticEvent, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Box, Slider, Typography } from '@mui/material'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
type Props = {
	vidRef: RefObject<ReactPlayer>
}

const Progress = ({ vidRef }: Props) => {
	const player = vidRef.current
	const { progress, setProgress } = useReactPlayerStore()
	const [sliderValue, setSliderValue] = useState(0)
	useEffect(() => {
		setInterval(() => {
			if (player) {
				const playedSeconds = player.getCurrentTime()
				const totalSeconds = player.getDuration()
				const totalTime = (playedSeconds / totalSeconds) * 100

				setProgress(totalTime)
			}
		}, 1000)
	}, [player])

	const formatTime = (progress: number) => {
		if (!player) return '0:00'
		const totalSeconds = player.getDuration()
		const currentSeconds = (progress / 100) * totalSeconds
		const minutes = Math.floor(currentSeconds / 60)
		const seconds = Math.floor(currentSeconds % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}
	const handleSliderChange = (
		__: SyntheticEvent | Event,
		newValue: number | number[],
	) => {
		setSliderValue(Number(newValue))
	}

	const handleCommit = (
		__: SyntheticEvent | Event,
		newValue: number | number[],
	) => {
		if (player) {
			const totalSeconds = player.getDuration()
			const newTime = (Number(newValue) / 100) * totalSeconds
			player.seekTo(newTime, 'seconds')
			setProgress(progress)
		}
	}
	return (
		<Box display="flex">
			<Typography color="text.primary">0:00</Typography>
			<Slider
				value={sliderValue}
				sx={{ width: '30%' }}
				onChange={handleSliderChange}
				onChangeCommitted={handleCommit}
				color="secondary"
			/>
			<Typography variant="body2" color="text.primary">
				{formatTime(progress)}
			</Typography>
		</Box>
	)
}

export default Progress

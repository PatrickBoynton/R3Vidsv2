import { RefObject, SyntheticEvent, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Box, Slider, Typography } from '@mui/material'
import { useReactPlayerStore } from '../../../stores/reactPlayerStore.ts'
import { useVideoPropertyStore } from '../../../stores/videoPropertyStore.ts'
type Props = {
	vidRef: RefObject<ReactPlayer>
}

const Progress = ({ vidRef }: Props) => {
	const player = vidRef.current
	const { progress, setProgress } = useReactPlayerStore()
	const { metadata } = useVideoPropertyStore()
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
	}, [player, setProgress])

	const formatTime = (progress: number) => {
		const hours = Math.floor(progress / 3600)
		const minutes = Math.floor((progress % 3600) / 60)
		const seconds = Math.floor(progress % 60)

		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
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
			<Typography color="text.primary">{formatTime(progress)}</Typography>
			<Slider
				value={sliderValue}
				sx={{ width: '30%' }}
				onChange={handleSliderChange}
				onChangeCommitted={handleCommit}
				color="secondary"
			/>
			<Typography variant="body2" color="text.primary">
				{formatTime(metadata.duration)}
			</Typography>
		</Box>
	)
}

export default Progress

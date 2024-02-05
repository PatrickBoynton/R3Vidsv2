import { Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { useVideoApiStore } from '../stores/videoApiStore'
import { useState } from 'react'

export const RandomTimeFilter = () => {
	const { setRandomFilterDuration, setRandomFilterLength } = useVideoApiStore()
	const none = 'None'
	const lte15 = '<= 15'
	const gte20 = '>= 20'
	const gte30 = '>= 30'
	const gte40 = '>= 40'

	const times = [none, lte15, gte20, gte30, gte40]
	const [selectedTime, setSelectedTime] = useState(times[0])

	const handleChange = (e: SelectChangeEvent) => {
		const { value } = e.target

		setSelectedTime(value)

		if (value === times[0]) {
			setRandomFilterDuration('')
			setRandomFilterLength('')
		} else if (value === times[1]) {
			setRandomFilterDuration('900')
			setRandomFilterLength('lte')
		} else if (value === times[2]) {
			setRandomFilterDuration('1200')
			setRandomFilterLength('gte')
		} else if (value === times[3]) {
			setRandomFilterDuration('1800')
			setRandomFilterLength('gte')
		} else if (value === times[4]) {
			setRandomFilterDuration('2400')
			setRandomFilterLength('gte')
		}
	}

	return (
		<Select value={selectedTime} label="Duration" onChange={handleChange}>
			{times.map(time => (
				<MenuItem
					key={time}
					style={{ backgroundColor: '#201449' }}
					value={time}>
					{time}
				</MenuItem>
			))}
		</Select>
	)
}

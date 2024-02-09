import { Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { useVideoApiStore } from '../stores/videoApiStore'
import { useState } from 'react'
const none = 'None'
const lte15 = '<= 15'
const lte20 = '<= 20'
const gte20 = '>= 20'
const gte30 = '>= 30'
const gte40 = '>= 40'

type Duration = {
	[key: string]: { duration: string; length: string }
}

const timeMappings: Duration = {
	[none]: { duration: '', length: '' },
	[lte15]: { duration: '900', length: 'lte' },
	[lte20]: { duration: '1200', length: 'lte' },
	[gte20]: { duration: '1200', length: 'gte' },
	[gte30]: { duration: '1800', length: 'gte' },
	[gte40]: { duration: '2400', length: 'gte' },
}

export const RandomTimeFilter = () => {
	const { setRandomFilterDuration, setRandomFilterLength } = useVideoApiStore()

	const times = [none, lte15, lte20, gte20, gte30, gte40]
	const [selectedTime, setSelectedTime] = useState(times[0])

	const handleChange = (e: SelectChangeEvent) => {
		const { value } = e.target
		const { duration, length } = timeMappings[value]

		setSelectedTime(value)
		setRandomFilterDuration(duration)
		setRandomFilterLength(length)
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

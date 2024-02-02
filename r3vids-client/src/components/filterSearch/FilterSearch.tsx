import { TextField, debounce } from '@mui/material'
import { useState } from 'react'
import { useVideoApiStore } from '../../stores/videoApiStore.ts'

const FilterSearch = () => {
	const [_, setSearchTerm] = useState('')
	const { getVideos } = useVideoApiStore()

	const debouncedSearch = debounce(value => {
		setSearchTerm(value)
	}, 500)
	const handleChanged = (e: any) => {
		const { value } = e.target
		debouncedSearch(value)
		getVideos(value)
	}
	return (
		<>
			<TextField
				onChange={handleChanged}
				label="Search Videos"
				variant="outlined"
				fullWidth
			/>
		</>
	)
}

export default FilterSearch

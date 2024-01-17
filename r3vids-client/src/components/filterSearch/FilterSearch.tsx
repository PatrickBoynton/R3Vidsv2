import { TextField, debounce } from '@mui/material'
import { useTagsStore } from '../../stores/tagsStore.ts'
import { useEffect, useState } from 'react'
import { useVideoApiStore } from '../../stores/videoApiStore.ts'
import { Filter } from './Filter.tsx'

const FilterSearch = () => {
	// const { tags, getTags } = useTagsStore()
	const [_, setSearchTerm] = useState('')
	const { getVideos } = useVideoApiStore()
	const { getTags, tags } = useTagsStore()
	useEffect(() => {
		getTags()
	}, [getTags])
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
			{tags && <Filter tags={tags} />}
		</>
	)
}

export default FilterSearch

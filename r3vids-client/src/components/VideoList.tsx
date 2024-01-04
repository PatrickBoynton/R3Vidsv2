import { Grid } from '@mui/material'
import VideoCard from './VideoCard.tsx'
import { useVideoApiStore } from '../stores/videoApiStore.ts'
import FilterSearch from './filterSearch/FilterSearch.tsx'

const VideoList = () => {
	const { videos } = useVideoApiStore()

	return (
		<Grid container spacing={1}>
			<Grid item>
				<FilterSearch />
			</Grid>
			{videos?.map(video => (
				<Grid key={video._id} item>
					<Grid key={video._id}>
						<VideoCard video={video} />
					</Grid>
				</Grid>
			))}
		</Grid>
	)
}

export default VideoList

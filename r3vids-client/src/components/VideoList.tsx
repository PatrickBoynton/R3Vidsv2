import { Grid } from '@mui/material'
import VideoCard from './VideoCard.tsx'
import { useVideoApiStore } from '../stores/videoApiStore.ts'
import FilterSearch from './filterSearch/FilterSearch.tsx'
import { useTagsStore } from '../stores/tagsStore.ts'

const VideoList = () => {
	const { videos } = useVideoApiStore()
	const { tags } = useTagsStore()
	return (
		<Grid container spacing={1}>
			<Grid item>{tags && <FilterSearch />}</Grid>
			{videos
				?.sort((a, b) => b.playCount - a.playCount)
				.map(video => (
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

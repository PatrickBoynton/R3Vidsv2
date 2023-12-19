import { Grid, List, ListItem } from '@mui/material'
import VideoCard from './VideoCard.tsx'
import { useVideoApiStore } from '../stores/videoApiStore.ts'

const VideoList = () => {
	const { videos } = useVideoApiStore()

	return (
		<Grid container spacing={2}>
			{videos?.map(video => (
				<Grid key={video._id} item xs={3}>
					<Grid key={video._id}>
						<VideoCard video={video} />
					</Grid>
				</Grid>
			))}
		</Grid>
	)
}

export default VideoList

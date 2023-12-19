import { Box, Grid, List, ListItem } from '@mui/material'
import VideoCard from './VideoCard.tsx'
import { useVideoApiStore } from '../stores/videoApiStore.ts'
import { useEffect } from 'react'
const PlayedVideoList = () => {
	const { playedVideos, getPlayedVideos } = useVideoApiStore()
	useEffect(() => {
		getPlayedVideos()
	}, [getPlayedVideos])
	return (
		<Box sx={{ overflow: 'none', whiteSpace: 'nowrap' }}>
			<Grid container spacing={2}>
				{playedVideos &&
					playedVideos
						?.sort(
							(a, b) =>
								new Date(b.lastPlayed).getTime() -
								new Date(a.lastPlayed).getTime(),
						)
						.map(video => (
							<Grid
								item
								key={video._id}
								sx={{ display: 'inline-block', width: 'auto' }}>
								<VideoCard video={video} />
							</Grid>
						))}
			</Grid>
		</Box>
	)
}

export default PlayedVideoList

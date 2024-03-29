import VideoCard from './VideoCard.tsx'
import { useVideoApiStore } from '../stores/videoApiStore.ts'

import { Box } from '@mui/material'
const PlayedVideoList = () => {
	const { playedVideos } = useVideoApiStore()
	return (
		<Box display="flex" sx={{ overflowX: 'auto', maxWidth: '100vw' }}>
			{playedVideos &&
				playedVideos
					?.sort(
						(a, b) =>
							new Date(b.lastPlayed).getTime() -
							new Date(a.lastPlayed).getTime(),
					)
					.map(video => (
						<Box sx={{ flexShrink: 0, marginRight: '8px' }} key={video._id}>
							<VideoCard video={video} />
						</Box>
					))}
		</Box>
	)
}

export default PlayedVideoList

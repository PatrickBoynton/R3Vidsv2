import {
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography,
} from '@mui/material'
import { Video } from '../types/types.ts'
import { useVideoApiStore } from '../stores/videoApiStore.ts'
import { useEffect } from 'react'

type Props = {
	video: Video
}

const VideoCard = ({ video }: Props) => {
	const { updateVideo, getVideos, getPlayedVideos } = useVideoApiStore()
	const handleUpdate = async (video: Video) => {
		const { playCount } = video
		const updatedVideo = {
			_id: video._id,
			lastPlayed: new Date(),
			played: true,
			playCount: playCount + 1,
		}
		updateVideo(updatedVideo)
	}
	useEffect(() => {}, [getPlayedVideos, getVideos])
	return (
		<Card
			sx={{
				backgroundColor: '#7667aa',
				color: 'text.primary',
				cursor: 'pointer',
			}}
			onClick={() => handleUpdate(video)}
			raised>
			<CardContent color="text.primary">
				<Typography variant="h4" color="text.primary" gutterBottom>
					{video.title}
				</Typography>
				<Typography variant="h5">Play Count: {video.playCount}</Typography>
				<Divider sx={{ backgroundColor: 'text.primary', mb: 5 }} />
				<img src={video.image} alt="Video thumbnail" color="text.primary" />
			</CardContent>
			<CardActions>
				<Button size="large" sx={{ color: 'text.primary' }}>
					{video.url}
				</Button>
			</CardActions>
			<Typography color="text" sx={{ marginLeft: 32 }}>
				{(video.lastPlayed &&
					new Date(video.lastPlayed).toLocaleDateString() +
						' ' +
						new Date(video.lastPlayed).toLocaleTimeString()) ||
					''}
			</Typography>
		</Card>
	)
}

export default VideoCard

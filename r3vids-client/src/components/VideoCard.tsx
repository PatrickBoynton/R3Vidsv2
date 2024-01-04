import {
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography,
} from '@mui/material'
import { Video } from '../types/types.ts'
import { useVideoPropertyStore } from '../stores/videoPropertyStore.ts'
import { useVideoApiStore } from '../stores/videoApiStore.ts'

type Props = {
	video: Video
}

const VideoCard = ({ video }: Props) => {
	const { setVideoProperties } = useVideoPropertyStore()
	const { getPlayedVideos, updateVideo } = useVideoApiStore()
	const handleUpdate = async (video: Video) => {
		const { playCount } = video
		const updatedVideo = {
			_id: video._id,
			lastPlayed: new Date(),
			played: true,
			playCount: playCount + 1,
		}
		updateVideo(updatedVideo)
		getPlayedVideos()
		setVideoProperties(video)
	}

	return (
		<Card sx={{ backgroundColor: '#7667aa', color: 'text.primary' }} raised>
			<CardContent color="text.primary">
				<Typography variant="h4" color="text.primary" gutterBottom>
					{video.title}
				</Typography>
				<Divider sx={{ backgroundColor: 'text.primary', mb: 5 }} />
				<img src={video.image} alt="Video thumbnail" color="text.primary" />
			</CardContent>
			<CardActions>
				<Button
					size="large"
					sx={{ color: 'text.primary' }}
					onClick={() => {
						handleUpdate(video)
					}}>
					{video.url}
				</Button>
			</CardActions>
			<Typography color="text" sx={{ marginLeft: 32 }}>
				{(video.lastPlayed &&
					new Date(video.lastPlayed).toLocaleTimeString()) ||
					''}
			</Typography>
		</Card>
	)
}

export default VideoCard

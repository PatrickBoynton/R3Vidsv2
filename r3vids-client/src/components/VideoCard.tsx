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
import agent from '../agent.ts'
import { useVideoApiStore } from '../stores/videoApiStore.ts'

type Props = {
	video: Video
}

const VideoCard = ({ video }: Props) => {
	const { setVideoProperties } = useVideoPropertyStore()
	const { getPlayedVideos } = useVideoApiStore()
	const handleUpdate = async (video: Video) => {
		const { playCount } = video
		const updatedVideo = {
			_id: video._id,
			lastPlayed: new Date(),
			played: true,
			playCount: playCount + 1,
		}
		agent.Videos.update(updatedVideo)
		getPlayedVideos()
		setVideoProperties(video)
	}

	return (
		<Card raised>
			<CardContent color="text.secondary">
				<Typography variant="h4" color="text.secondary" gutterBottom>
					{video.title}
				</Typography>
				<Divider />
				<img src="" alt="Video thumbnail" color="text.secondary" />
				<Typography color="text.secondary">
					{(video.lastPlayed &&
						new Date(video.lastPlayed).toLocaleTimeString()) ||
						''}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					sx={{ color: 'text.secondary' }}
					onClick={() => {
						handleUpdate(video)
					}}>
					{video.url}
				</Button>
			</CardActions>
		</Card>
	)
}

export default VideoCard

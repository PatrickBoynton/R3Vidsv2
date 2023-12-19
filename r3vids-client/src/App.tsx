import './App.css'
import { useVideoApiStore } from './stores/videoApiStore.ts'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import VideoList from './components/VideoList.tsx'
import PlayedVideoList from './components/PlayedVideoList.tsx'
import VideoPlayer from './components/VideoPlayer.tsx'
import { useVideoPropertyStore } from './stores/videoPropertyStore.ts'

const App = () => {
	const {
		randomVideo,
		getVideos,
		getRandomVideo,
		getPlayedVideos,
		playedVideos,
	} = useVideoApiStore()

	const { setVideoProperties, title } = useVideoPropertyStore()

	useEffect(() => {
		getVideos()
		if (!randomVideo) {
			getRandomVideo()
		}
		getPlayedVideos()
	}, [getVideos, getRandomVideo, randomVideo, getPlayedVideos])

	useEffect(() => {
		setVideoProperties(randomVideo)
	}, [randomVideo, setVideoProperties])

	return (
		<>
			<Typography variant="h1" color="text.primary">
				{title}
			</Typography>
			<VideoPlayer />
			<Typography variant="h1" color="text.primary">
				{playedVideos && playedVideos?.length > 0
					? 'Played Videos'
					: 'No Videos'}
			</Typography>
			{playedVideos && playedVideos?.length > 0 && <PlayedVideoList />}
			<Typography variant="h1" color="text.primary">
				All Videos
			</Typography>
			<VideoList />
		</>
	)
}

export default App

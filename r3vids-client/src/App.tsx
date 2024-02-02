import './App.css'
import { useVideoApiStore } from './stores/videoApiStore'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import VideoList from './components/VideoList'
import PlayedVideoList from './components/PlayedVideoList'
import VideoPlayer from './components/VideoPlayer'
import { useVideoPropertyStore } from './stores/videoPropertyStore'

const App = () => {
	const {
		getVideos,
		getRandomVideo,
		playedVideos,
		previousVideo,
		getPreviousVideo,
		videos,
	} = useVideoApiStore()

	const { title } = useVideoPropertyStore()

	// Added a tiny delay to ensure that two requests were not sent.
	// If there is no delay the first one appears to
	// take to long, and another is sent right away.
	useEffect(() => {
		const setup = () => {
			if (!previousVideo) getRandomVideo()
			getVideos()
		}
		if (!videos) {
			const delay = setTimeout(() => {
				console.log('SETUP CALLED')

				setup()
			}, 50)
			return () => clearTimeout(delay)
		}
	}, [videos, getRandomVideo, getVideos, previousVideo])

	useEffect(() => {
		try {
			if (!previousVideo) {
				getPreviousVideo()
			}
		} catch (e) {
			console.error('App getPreviousVideo: ', e)
		}
	}, [getPreviousVideo, previousVideo])

	return (
		<>
			<Typography variant="h1" color="text.primary">
				{title}
			</Typography>
			<VideoPlayer />
			<>
				<Typography variant="h1" color="text.primary">
					{playedVideos && playedVideos?.length > 0
						? 'Played Videos'
						: 'No Played Videos'}
				</Typography>
				{playedVideos && playedVideos?.length > 0 && <PlayedVideoList />}

				<Typography variant="h1" color="text.primary">
					All Videos
				</Typography>
				<VideoList />
			</>
		</>
	)
}

export default App

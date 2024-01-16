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
		randomVideo,
		getVideos,
		getRandomVideo,
		playedVideos,
		previousVideo,
		getPreviousVideo,
	} = useVideoApiStore()

	const { setVideoProperties, title } = useVideoPropertyStore()

	// Added a tiny delay to ensure that two requests were not sent.
	// If there is no delay the first one appears to
	// take to long, and another is sent ri	ght away.
	useEffect(() => {
		const delay = setTimeout(() => {
			if (!previousVideo) getRandomVideo()
			getVideos()
		}, 500)
		return () => clearTimeout(delay)
	}, [getVideos, getRandomVideo, previousVideo])

	useEffect(() => {
		if (randomVideo) {
			setVideoProperties(randomVideo)
		}
	}, [randomVideo, setVideoProperties])

	useEffect(() => {
		try {
			if (!previousVideo) {
				getPreviousVideo()
			} else {
				setVideoProperties(previousVideo)
			}
		} catch (e) {
			console.error('fetchData: ', e)
		}
	}, [getPreviousVideo, setVideoProperties, previousVideo])

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

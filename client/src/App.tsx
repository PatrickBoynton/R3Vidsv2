import './App.css'
import { Button } from '@mui/material'
import RandomScreen from './screens/RandomScreen'
import TutorialScreen from './screens/TutorialScreen'
import { useEffect, useState } from 'react'
import TutorialDetailScreen from './screens/TutorialDetailScreen'
import { useVideoApiStore } from './stores/videoApiStore'
const App = () => {
  const [isTutorial, setIsTutorial] = useState(false)
  const { getVideos, getRandomVideo } = useVideoApiStore()

  useEffect(() => {
    const fetchVideos = async () => {
      await getVideos('')

      await getRandomVideo()
    }
    fetchVideos()
  }, [getVideos, getRandomVideo])

  return (
    <>
      <Button onClick={() => setIsTutorial(!isTutorial)}>
        Tutorial Toggle
      </Button>
      {!isTutorial ? (
        <RandomScreen />
      ) : isTutorial ? (
        <TutorialScreen />
      ) : (
        <TutorialDetailScreen />
      )}
    </>
  )
}

export default App

import './App.css'
import { Button } from '@mui/material'
import RandomScreen from './screens/RandomScreen'
import TutorialScreen from './screens/TutorialScreen'
import { useState } from 'react'
import TutorialDetailScreen from './screens/TutorialDetailScreen'

const App = () => {
  const [isTutorial, setIsTutorial] = useState(false)
  return (
    <>
      <Button onClick={() => setIsTutorial(!isTutorial)}>
        Tutorial Toggle
      </Button>
      {!isTutorial ? (
        <RandomScreen />
      ) : <TutorialScreen /> ? (
        <TutorialDetailScreen />
      ) : null}
    </>
  )
}

export default App

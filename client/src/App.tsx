import './App.css'
import { Button } from '@mui/material'
import RandomScreen from './screens/RandomScreen'
import TutorialScreen from './screens/TutorialScreen'
import { useState } from 'react'

const App = () => {
  const [isTutorial, setIsTutorial] = useState(false)
  return (
    <>
      <Button onClick={() => setIsTutorial(!isTutorial)}>Tutorial Toggle</Button>
      {!isTutorial ? <RandomScreen /> :
        <TutorialScreen />}
    </>
  )
}

export default App

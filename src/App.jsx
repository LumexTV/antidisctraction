import { useState } from 'react'
import Confrontation from './components/Confrontation'
import MotivationVideo from './components/MotivationVideo'
import FocusMode from './components/FocusMode'

function App() {
  const [phase, setPhase] = useState('confrontation') // confrontation, motivation, focus

  return (
    <main className="w-full h-screen bg-black overflow-hidden relative font-sans">
      {phase === 'confrontation' && (
        <Confrontation onStart={() => setPhase('motivation')} />
      )}

      {phase === 'motivation' && (
        <MotivationVideo onComplete={() => setPhase('focus')} />
      )}

      {phase === 'focus' && (
        <FocusMode />
      )}
    </main>
  )
}
export default App

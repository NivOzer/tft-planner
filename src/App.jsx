import { useState } from 'react'

import './App.css'
import Hexagon from './components/Hexagon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hexagon/>
    </>
  )
}

export default App

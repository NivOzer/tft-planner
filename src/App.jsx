import { useState } from 'react'

import './App.css'

import Position from './components/Position'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Position/>
    </>
  )
}

export default App

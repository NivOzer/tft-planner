import { useState } from 'react'

import './App.css'
import HexagonGrid from './components/HexagonGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HexagonGrid/>
    </>
  )
}

export default App

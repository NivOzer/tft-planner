import { useState } from 'react'

import './App.css'
import Hexagon from './components/Hexagon'
import HexagonRow from './components/HexagonRow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HexagonRow/>
    </>
  )
}

export default App

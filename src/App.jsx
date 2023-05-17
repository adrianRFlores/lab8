import { useState } from 'react'
import  Maze from './components/maze/Maze'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Maze/>
    </>
  )
}

export default App

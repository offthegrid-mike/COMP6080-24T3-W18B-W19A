import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'

function App() {
  // const [count, setCount] = useState(0)
  // const [text, setText] = useState("Hello world")
  const [index, setIndex] = useState(0)
  const [classes, setClasses] = useState("")

  const textArrary = ["Hello world", "Hello sydney"]

  return (
    <>
      <Person />
    </>
  )
}

export default App

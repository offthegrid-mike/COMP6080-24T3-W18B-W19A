import { useState } from 'react'
import './App.css'
import Person from './Person'

function App() {
  // const [count, setCount] = useState(0)
  const textList = ["Hello Sydney", "Hello COMP6080"]

  // const [text, setText] = useState(textList[0])
  const [index, setIndex] = useState(0)


  return (
    <>
      <Person />
    </>
  )
}

export default App

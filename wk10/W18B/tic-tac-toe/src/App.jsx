import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('X')
  const [hasWon, setHasWon] = useState(false)

  const buttonClick = (index) => {
    if (hasWon || state[index] !== null)
      return

    const newState = [...state]
    newState[index] = player
    setState(newState)
    setPlayer(player === 'X' ? 'O' : 'X')
  }

  const reset = () => { 
    setPlayer("X")
    setState(Array(9).fill(null))
    setHasWon(false)
  }

  useEffect(() => {
    // checking for winner
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    lines.forEach(line => {
      const [i1, i2, i3] = line
      if (state[i1] && state[i1] === state[i2] && state[i2] === state[i3]) {
        setHasWon(true)
      }
    });

  }, [state])

  return (
    <>
      <Button value={state[0]} func={() => buttonClick(0)}/>
      <Button value={state[1]} func={() => buttonClick(1)}/>
      <Button value={state[2]} func={() => buttonClick(2)}/>
      <br/>
      <Button value={state[3]} func={() => buttonClick(3)}/>
      <Button value={state[4]} func={() => buttonClick(4)}/>
      <Button value={state[5]} func={() => buttonClick(5)}/>
      <br/>
      <Button value={state[6]} func={() => buttonClick(6)}/>
      <Button value={state[7]} func={() => buttonClick(7)}/>
      <Button value={state[8]} func={() => buttonClick(8)}/>
        <br />
      <button onClick={reset}>Reset</button>
      { hasWon && 
      <p>
        the winner is {player === "O" ? "X" : "O"}
      </p>
      }
    </>
  )
}

export default App

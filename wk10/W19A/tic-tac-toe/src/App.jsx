import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [grid, setGrid] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('X')
  const [hasWon, setHasWon] = useState(false)

  const cellClick = (index) => {
    if (hasWon || grid[index] !== null)
      return

    grid[index] = player
    setPlayer(player === "X" ? "O" : "X")

    // check winner
    const conditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    conditions.forEach(condition => {
      const [i1, i2, i3] = condition
      if (grid[i1] && grid[i1] === grid[i2] && grid[i2] === grid[i3])
        setHasWon(true)
    })
  }

  const resetGrid = () => {
    setGrid(Array(9).fill(null))
    setPlayer("X")
    setHasWon(false)
  }

  return (
    <>
      <Button value={grid[0]} buttonClick={() => cellClick(0)}/>
      <Button value={grid[1]} buttonClick={() => cellClick(1)}/>
      <Button value={grid[2]} buttonClick={() => cellClick(2)}/>
      <br />
      <Button value={grid[3]} buttonClick={() => cellClick(3)}/>
      <Button value={grid[4]} buttonClick={() => cellClick(4)}/>
      <Button value={grid[5]} buttonClick={() => cellClick(5)}/>
      <br />
      <Button value={grid[6]} buttonClick={() => cellClick(6)}/>
      <Button value={grid[7]} buttonClick={() => cellClick(7)}/>
      <Button value={grid[8]} buttonClick={() => cellClick(8)}/>
      <br />
      {
        hasWon &&
        <p>Player {player === "X" ? "O" : "X"} has won</p>
      }
      <Button value="Reset" buttonClick={() => resetGrid()} />
    </>
  )
}

export default App

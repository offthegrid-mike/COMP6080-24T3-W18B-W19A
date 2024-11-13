import React from 'react'

const Button = ({value, buttonClick}) => {
  return (
    <button onClick={buttonClick}>{value}</button>
  )
}

export default Button
import React from 'react'

const Button = ({value, func}) => {
  return (
    <button onClick={func}>{value}</button>
  )
}

export default Button
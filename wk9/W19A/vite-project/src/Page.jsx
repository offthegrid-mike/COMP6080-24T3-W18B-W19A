import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
  const { id } = useParams()

  return (
    <>
      <div>Page</div>
      <span>This id is {id}</span>
    </>
  )
}

export default Page

// http://localhost:5173/page/12
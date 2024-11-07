import { useParams } from "react-router-dom"


const Page = () => {
  const { id } = useParams()

  return (
    <>
      <div>Page</div>
      <span>Your id is {id}</span>
    </>
  )
}

export default Page
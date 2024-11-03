import { useState } from "react"

function IncrementButton() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <span>Count is: {count}</span>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
}

export default IncrementButton
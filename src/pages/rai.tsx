import { useState } from 'react'
import './rai.css'

function Rai() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hi</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default Rai
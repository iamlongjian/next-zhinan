'use client'

import { useState } from "react"

const Template = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </div>
  )
}

export default Template
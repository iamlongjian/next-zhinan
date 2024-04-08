'use client'

import { useState } from "react"
import Link from "next/link"


const DashboardLayout = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <br />
      <h1>
        Layout {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>
        increment
      </button>
      {children}
    </div>
  )
}

export default DashboardLayout
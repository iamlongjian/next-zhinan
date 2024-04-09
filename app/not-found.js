'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>啥也没有！</button>
      <br/>
      <Link href="/">去首页</Link>
    </div>
  )
}

export default NotFound

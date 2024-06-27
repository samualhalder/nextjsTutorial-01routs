import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='bg-black text-5xl'>Home
     <Link href="/product">Product</Link>
    </div>
  )
}

export default Home
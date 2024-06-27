"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function OrderProduct() {
    const router=useRouter()
    const handleClick=()=>{
        router.push('/')
    }
  return (
    <div> 
        <h1>OrderProduct</h1>
        <button onClick={handleClick}>Place order</button>

    </div>
  )
}



export default OrderProduct


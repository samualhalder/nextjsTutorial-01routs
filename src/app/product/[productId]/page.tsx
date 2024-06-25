import {Metadata} from 'next'
import React from 'react'
type Props={
  params:{
    productId:string
  }
}

export const generateMetadata=({params}:Props):Metadata=>{
  return {
    title:`Product ${params.productId}`
  }
}
function AboutProduct({params}:Props) {
  return (
    <div className='bg-red-400'>AboutProduct {params.productId}</div>
  )
}

export default AboutProduct;
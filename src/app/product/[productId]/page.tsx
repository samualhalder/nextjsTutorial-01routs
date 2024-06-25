import React from 'react'

function AboutProduct({params}:{
    params:{productId:string}
}) {
  return (
    <div className='bg-red-400'>AboutProduct {params.productId}</div>
  )
}

export default AboutProduct
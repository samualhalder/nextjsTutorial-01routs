import React from 'react'

function AboutProduct({params}:{
    params:{productId:string}
}) {
  return (
    <div>AboutProduct {params.productId}</div>
  )
}

export default AboutProduct
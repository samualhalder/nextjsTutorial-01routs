import React from 'react'

function Riview({params}:{
    params:{
        productId:string,
        rivewId:number
    }
}) {
  return (
    <div>Riview {params.rivewId}  for product {params.productId} </div>
  )
}

export default Riview
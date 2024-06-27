import Link from 'next/link'
import React from 'react'

function Product() {
  return (
    <div>
        <h1>Products</h1>
        <h2><Link href={'/product/1'}>Product 1</Link></h2>
        <h2><Link href={'/product/2'}>Product 2</Link></h2>
        <h2><Link href={'/product/3'} replace>Product 3</Link></h2>  
  
        <Link href="/">Home</Link>
    </div>
  )
}

export default Product
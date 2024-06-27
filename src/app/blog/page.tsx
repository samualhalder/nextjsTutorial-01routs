
import React from 'react'

function Blog() {
  const generateError=()=>{
    const random=Math.round((Math.random()*2));
    if(random==1){
      throw  new Error("Connection lost")
    }
  }
  generateError()
  return (
    <div>
      Blog
     
    </div>
  )
}

export default Blog
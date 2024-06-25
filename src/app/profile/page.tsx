import React from 'react'
import {Metadata} from 'next'
export const metadata:Metadata={
  title:{
    absolute:"",
    default:"",
    template:"%s | profile"
  }
}

function Profile() {
  return (
    <div>my Profile</div>
  )
}

export default Profile
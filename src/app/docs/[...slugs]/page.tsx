import React from 'react'

function Docs({params}:{
    params:{
        slugs:string[]
    }
}) {
  if(params.slugs.length===2){
    return <h1>Showing the feature {params.slugs[1]}</h1>
  }else if(params.slugs.length===1){
    return <h1>showing the main page of {params.slugs[0]}</h1>
  }
  return <div>hello world</div>
}

export default Docs
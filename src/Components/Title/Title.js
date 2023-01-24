import React from 'react'



const Title = ({name}) => {
  return (
    <div style={{textAlign:"center", textDecoration:"underline", paddingTop:40, color:'var(--color-light)'}}>
    
      <h1>{name}</h1>
      
    </div>
  )
}

export default Title

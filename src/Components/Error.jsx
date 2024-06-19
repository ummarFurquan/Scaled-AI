import React from 'react'

const Error = () => {
  return (
    <div className='container' style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'50vh', marginBottom:'30vh'}}>
      <h1 style={{overflow:'hidden'}}>An Error Occured!</h1>
      <h3 style={{overflow:'hidden'}}>Please click on the link to mail us<a href='mailto:jay.natarajan@agilitnet.com'><span> Mail Us! </span></a></h3>
    </div>
  )
}

export default Error

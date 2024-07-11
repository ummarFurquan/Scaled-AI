import React from 'react'

const Error = () => {
  return (
    <div className='container' style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'50vh', marginBottom:'30vh'}}>
      <h1 style={{overflow:'hidden'}}>An Error Occured!</h1>
      <h3 style={{overflow:'hidden'}}>Please click on the link to <a href='mailto:info@scaledai.com' style={{color:'#dc3545'}}><span>Mail Us! </span></a></h3>
    </div>
  )
}

export default Error

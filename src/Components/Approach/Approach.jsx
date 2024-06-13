import React from 'react'
import './Approach.css'
import { Fade } from 'react-awesome-reveal'
const Approach = () => {
  return (
    <>
    <Fade>
    <div className='approach'>
      <div className="logo-container">
        <img src='https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/business-background-3-1024x585.png' style={{width:'100vw', height:'80vh', }} alt='approach'/>
        <div className="heading-1">
          <p style={{overflowY: "hidden"}}><span>Agilitnet's</span> approach in building long-lasting client relationships is achieved by following these key principles:</p>
        </div>
      </div>
    </div>
    </Fade>
    <h3>Cards</h3>
    </>
  )
}

export default Approach

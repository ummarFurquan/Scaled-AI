import React from 'react'
import './Approach.css'
import { Fade } from 'react-awesome-reveal'
import Pie  from './Charts/Pie'
import Section from './Charts/Section/Section'
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
    <div className="container">
      <div className="heading-container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{overflow:'hidden'}}>Approach</h1>
      </div>
      <Pie/>
      <Section/>
    </div>
    </>
  )
}

export default Approach

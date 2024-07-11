import React from 'react'
import './Approach.css'
import AboutBack from '../../assets/Images/approachback.png'
import { Fade } from 'react-awesome-reveal'
import Accordian   from './Charts/Section/Accordian/Accordian'
import Section from './Charts/Section/Section'
const Approach = () => {
  return (
    <>
    <Fade>
    <div className='approach'>
      <div className="logo-container">
        <img src={AboutBack} style={{width:'100vw', height:'80vh', objectFit:'cover' }} alt='approach'/>
        <div className="heading-1">
          <p style={{overflowY: "hidden", color:'black'}}>Agilitnet's approach in building long-lasting client relationships is achieved by following these key principles:</p>
        </div>
      </div>
    </div>
    </Fade>
    <div className="container">
      <div className="heading-container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{overflow:'hidden', color:'red'}}>Our Approach</h1>
      </div>
      <Accordian/>
      <Section/>
    </div>
    </>
  )
}

export default Approach

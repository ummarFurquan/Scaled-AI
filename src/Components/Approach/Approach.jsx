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
        <hr style={{color:'#dc3545'}}/>
        <div className="heading-1">
          <p style={{overflowY: "hidden", color:'black', fontSize:'23px'}}>Our proven approach to navigating the complexities of technological transformation is achieved by following these core tenets</p>
        </div>
      </div>
    </div>
    </Fade>
    <div className="container">
      <div className="heading-container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{overflow:'hidden', color:'red', fontFamily:'Montserrat', marginBottom:'30px'}}>Our Approach</h1>
      </div>
      <Accordian/>
      <Section/>
    </div>
    </>
  )
}

export default Approach

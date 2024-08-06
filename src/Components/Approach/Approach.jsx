import React from 'react'
import './Approach.css'
import { Fade } from 'react-awesome-reveal'
import Accordian from './Charts/Section/Accordian/Accordian'
import Section from './Charts/Section/Section'
const Approach = () => {
  return (
    <>
      <Fade>
        <div className="container">
          <div className="heading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ overflow: 'hidden', color: '#af3129', fontFamily: 'Montserrat', marginBottom: '10px' }}>Our Approach</h1>
          </div>
          <div className="heading-1">
            <div className="card" style={{marginBottom:'20px', padding:'0px', border:'1px solid #af3129'}}>
              <div className="card-body">
                <p style={{ overflowY: "hidden", color: 'black', fontSize: '20px' }}>
                  Our proven approach to navigating the complexities of technological transformation is achieved by following these core tenets
                </p>
              </div>
            </div>
          </div>
          <Accordian />
          <Section />
        </div>
      </Fade>
    </>
  )
}

export default Approach

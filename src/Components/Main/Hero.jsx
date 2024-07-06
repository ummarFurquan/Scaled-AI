import React from 'react'
import Main from './Main'
import HeroImage from '../../assets/Hero Image.png'
import { Fade } from "react-awesome-reveal"
import './Hero.css'
const Hero = () => {
  return (
    <>
    <Fade>
    <section className='hero' style={{margin:'2rem 0'}}>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="copy">
                        <div className="text-hero-bold" style={{margin:'2rem 4rem 0 0', fontWeight:'500', fontSize:'35px'}}>
                        <span className='top-heading' style={{fontStyle:'bree'}}>Empowerment through <span style={{color:'red'}}>Technology</span> <br/>Impact through <span style={{color:'red'}}>Solutions</span></span>
                        </div>
                        <div className="text-hero-regular" style={{margin:'24px 0', fontSize:'18px'}}>
                        In today's fast-paced digital landscape, agile adaptation to emerging technologies is crucial for staying competitive. At Agilitnet, we specialize in providing digital engineering and IT solutions that enable businesses to maneuver through these changes successfully. With a focus on outcome-driven approaches, we help our clients capitalize new opportunities and attain sustainable growth.
                        </div>
                        <div className="cta">
                            <a href='#main' className='btn btn-danger'>Explore More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <img src={HeroImage} style={{width:'100%', borderRadius:'20px', marginTop:'10px'}} alt='Hero Section'/>
                </div>
            </div>
        </div>
    </section>
    </Fade>
    <Main/>
    </>
  )
}

export default Hero

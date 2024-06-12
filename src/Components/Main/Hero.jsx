import React from 'react'
import Main from './Main'
import ServiceImg from '../../assets/landing.jpg'
import { Fade } from "react-awesome-reveal"
const Hero = () => {
  return (
    <>
    <Fade direction='up'>
    <section className='hero' style={{margin:'5rem 0'}}>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="copy">
                        <div className="text-hero-bold" style={{margin:'90px 0 0 0', fontWeight:'500', fontSize:'40px'}}>
                        Empowerment through <span style={{color:'red'}}>Technology</span>, Impact through <span style={{color:'red'}}>Solutions</span>
                        </div>
                        <div className="text-hero-regular" style={{margin:'24px 0'}}>
                        At <span style={{color:'red'}}>Agilitnet Solutions</span>, we leverage technology to drive positive change and create lasting impact. Our mission is to empower individuals, businesses, and communities with innovative solutions that address real-world challenges. Through cutting-edge advancements and a commitment to excellence, we enhance productivity, foster growth, and improve quality of life. Join us in making a meaningful difference, one solution at a time.
                        </div>
                        <div className="cta">
                            <a href='#about' className='btn btn-danger btn-sm shadow-none'>Explore More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <img src={ServiceImg} style={{width:'100%', borderRadius:'20px'}} alt='Hero Section'/>
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

import React, {useEffect, useRef} from 'react'
import Main from './Main'
import { Fade } from "react-awesome-reveal"
import gif from '../../assets/hero-vid.mp4'
import './Hero.css'
const Hero = () => {

   
    return (
        <>
            <Fade>
                <section className='hero' style={{ position: 'relative', overflow: 'hidden' }}>
                    <div className='background-video'>
                        <video autoPlay loop muted playsInline   style={{
                            
                            width: '100vw',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}>
                            <source src={gif} type="video/mp4" />
                        </video>
                    </div>
                    <div className='content-overlay'>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copy">
                                        <h1 className="text-hero-bold">
                                            <span className='top-heading'>
                                                Empowerment through <span className="text-danger">Technology</span> <br />
                                                Impact through <span className="text-danger">Solutions</span>
                                            </span>
                                        </h1>
                                        <p className="text-hero-regular">
                                            In today's fast-paced digital landscape, agile adaptation to emerging technologies is crucial for staying competitive. At ScaledAI, we specialize in providing digital engineering and IT solutions that enable businesses to maneuver through these changes successfully. With a focus on outcome-driven approaches, we help our clients capitalize new opportunities and attain sustainable growth
                                        </p>
                                        <div className="cta">
                                            <a href='#main' className='btn btn-danger'>Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <Main />
        </>
    )
}

export default Hero

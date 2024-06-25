import React from 'react';
import Main from './Main';
import { Fade } from "react-awesome-reveal";
import './Hero.css';

const Hero = () => {
    return (
        <>
        <Fade>
            <div className='hero-container'>
                <div className='hero-image'></div>
                <section className='hero-content'>
                    <div className='text-container'>
                        <div className='text-hero-bold'>
                            <span className='top-heading'>
                                Empowerment through <span>Technology</span> <br />
                                Impact through <span>Solutions</span>
                            </span>
                        </div>
                        <div className='text-hero-regular'>
                            In today's fast-paced digital landscape, agile adaptation to emerging technologies is crucial for staying competitive. At Agilitnet, we specialize in providing digital engineering and IT solutions that enable businesses to maneuver through these changes successfully. With a focus on outcome-driven approaches, we help our clients capitalize new opportunities and attain sustainable growth.
                        </div>
                        <div className='cta'>
                            <a href='#main' className='btn btn-danger'>Explore More</a>
                        </div>
                    </div>
                </section>
            </div>
        </Fade>
        <Main/>
        </>
    );
};

export default Hero;

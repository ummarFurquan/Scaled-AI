import React from 'react'
import Main from './Main'
import { Fade } from "react-awesome-reveal"
import videoSource  from '@/../../src/assets/hero.mp4'
// src\assets\hero.mp4
import './Hero.css'
const Hero = () => {
    document.addEventListener('DOMContentLoaded', (event) => {
        const video = document.getElementById('background-video');

        video.addEventListener('fullscreenchange', (event) => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        });

        video.addEventListener('webkitfullscreenchange', (event) => {
            if (document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
            }
        });

        video.addEventListener('mozfullscreenchange', (event) => {
            if (document.mozFullScreenElement) {
                document.mozCancelFullScreen();
            }
        });

        video.addEventListener('msfullscreenchange', (event) => {
            if (document.msFullscreenElement) {
                document.msExitFullscreen();
            }
        });
    });


    return (
        <>
            <Fade>
                <section className='hero'>
                    <div className='background-video'>
                        <video id='background-video' autoPlay loop muted controlsList="nofullscreen">
                            <source src='https://videos.pexels.com/video-files/27975991/12278781_1920_1080_60fps.mp4' type="video/mp4" />
                        </video>
                    </div>
                    <div className='content-overlay'>
                        <div className='container'>
                            <div className="row justify-content-center">
                                <div className="col-md-8 text-center">
                                    <div className="copy">
                                        <h1 className="text-hero-bold" >
                                            <span className='top-heading'>
                                                Empowerment through <span className="text-danger">Technology</span> <br />
                                                Impact through <span className="text-danger">Solutions</span>
                                            </span>
                                        </h1>
                                        {/* <p className="text-hero-regular">
                                            In today's fast-paced digital landscape, agile adaptation to emerging technologies is crucial for staying competitive. At ScaledAI, we specialize in providing digital engineering and IT solutions that enable businesses to maneuver through these changes successfully. With a focus on outcome-driven approaches, we help our clients capitalize new opportunities and attain sustainable growth
                                        </p> */}
                                        {/* <div className="cta">
                                            <button className='btn btn-danger btn-lg' style={{borderRadius:'30px'}}><a href='#main' style={{color:'white', textDecoration:'none'}}>Explore More</a></button>
                                        </div> */}
                                        <a href='#main'>
                                            <div className="scroll-down2"></div> </a>
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

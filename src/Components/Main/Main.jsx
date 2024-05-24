import React from 'react'
import { Fade } from "react-awesome-reveal"
const Main = () => {
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro aut animi sunt nulla, placeat eaque ad dolores voluptate nostrum.
                        </div>
                        <div className="cta">
                            <a href='#' className='btn btn-danger btn-sm shadow-none'>Explore More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <img src='https://images.edrawmax.com/images/knowledge/pyramid-chart-9-sales-and-marketing-pyramid.jpg' style={{width:'50rem', height:'45rem'}} alt='Hero npm i react-reveal'/>
                </div>
            </div>
        </div>
    </section>
    </Fade>
    </>
  )
}

export default Main

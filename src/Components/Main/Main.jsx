import React from 'react'
import About from '../../assets/about-removebg-preview.png'
import Aboutus from '../../assets/Team-Work_Mesa-de-trabajo-1.svg'

const Main = () => {
  return (
    <>
    <div id="about">
    <div className="container">
      <div className="row">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column'}}>
          <img src={About} alt='About' style={{height: '15rem', marginBottom: '1rem'}} />
        </div>
        <div className="col-xs-12 col-md-6">
          <img src={Aboutus} className="img-responsive" alt="" style={{width: '100%', marginBottom: '0', height:'80%'}} />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2 style={{overflow: 'hidden'}}>Who are we?</h2>
            <p><span style={{color: 'red',  fontSize:'30px'}}>Agilitnet</span> is a leading technology solutions provider dedicated to empowering government agencies to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</p>
            <h3 style={{overflow: 'hidden'}}>Why Choose Us?</h3>
            <div className="list-style" >
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ol>
                  <li><span style={{color:'red'}}>T</span>rust</li>
                  <li><span style={{color:'red'}}>E</span>mpowerment</li>
                  <li><span style={{color:'red'}}>A</span>gility / <span style={{color:'red'}}>A</span>ccountable</li>
                  <li><span style={{color:'red'}}>M</span>utual Respect</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="heading-container">
    <h1>Domains</h1>
    </div>
    

  </div>
  </>

  )
}

export default Main

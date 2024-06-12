import React from 'react'
import About from '../../assets/about-removebg-preview.png'
import Aboutus from '../../assets/aboutus.jpg'

const Main = (props) => {
  return (
    <>
    <div id="about">
    <div className="container">
      <div className="row">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column'}}>
          <img src={About} alt='About' style={{height: '15rem', marginBottom: '1rem'}} />
        </div>
        <div className="col-xs-12 col-md-6">
          <img src={Aboutus} className="img-responsive" alt="" style={{width: '100%', marginBottom: '1rem'}} />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2 style={{overflow: 'hidden'}}>Who are we?</h2>
            <p><span style={{color: 'red',  fontSize:'30px'}}>Agilitnet</span> is a leading technology solutions provider dedicated to empowering government agencies to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</p>
            <h3>Why Choose Us?</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul style={{padding: '10px', lineHeight: '30px', listStyleType: 'circle'}}>
                  <li>Trust</li>
                  <li>Empower</li>
                  <li>Agility/Accountable</li>
                  <li>Mutual Respect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="domains">
    <h1>Domains</h1>
  </div>
  </>

  )
}

export default Main

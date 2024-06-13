import React from 'react';
import About from '../../assets/about-removebg-preview.png';
import Aboutus from '../../assets/Team-Work_Mesa-de-trabajo-1.svg';
import mission from '../../assets/mission.png'
import vision from '../../assets/vision.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-awesome-reveal';

const Main = () => {
  return (
    <>
      <Fade>
        <div id="about">
          <div className="container">
            <div className="row">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                <img src={About} alt='About' style={{ height: '15rem', marginBottom: '1rem' }} />
              </div>
              <div className="col-xs-12 col-md-6">
                <img src={Aboutus} className="img-responsive" alt="" style={{ width: '100%', marginBottom: '0', height: '80%' }} />
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2 style={{ overflow: 'hidden' }}>Who are we?</h2>
                  <p><span style={{ color: 'red', fontSize: '30px' }}>Agilitnet</span> is a leading technology solutions provider dedicated to empowering government agencies to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</p>
                  <h3 style={{ overflow: 'hidden' }}>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ol>
                        <li><span style={{ color: 'red' }}>T</span>rust</li>
                        <li><span style={{ color: 'red' }}>E</span>mpowerment</li>
                        <li><span style={{ color: 'red' }}>A</span>gility / <span style={{ color: 'red' }}>A</span>ccountable</li>
                        <li><span style={{ color: 'red' }}>M</span>utual Respect</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="container">
          <div className="heading-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1 style={{ overflow: 'hidden', color:'red' }}>Domains we work in</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Cloud & Infrastructure" src="https://cdn-icons-png.flaticon.com/512/3953/3953477.png" style={{ height: '200px', width: '100%', objectFit:'contain' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cloud & Infrastructure</h3>
                  <p className="card-text">Cloud Infrastructure is the collection of hardware and software elements such as computing power, networking, storage, and virtualization resources needed to enable cloud computing. Cloud infrastructure types usually also include a user interface (UI) for managing these virtual resources.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Cybersecurity, Risk & Compliance" src="https://png.pngtree.com/png-clipart/20230403/original/pngtree-security-line-icon-png-image_9020852.png" style={{ height: '200px', width: '100%', objectFit:'contain' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cybersecurity, Risk & Compliance</h3>
                  <p className="card-text">At its core, cybersecurity compliance means adhering to standards and regulatory requirements set forth by some agency, law or authority group. Organizations must achieve compliance by establishing risk-based controls that protect the confidentiality, integrity and availability (CIA) of information.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Data Analytics" src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-data-analytics-line-icon-png-image_9117346.png" style={{ height: '200px', width: '100%', objectFit:'contain' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Data Analytics</h3>
                  <p className="card-text">Data analytics is defined as a set of tools and technologies that help manage qualitative and quantitative data with the object of enabling discovery, simplifying organization, supporting governance, and generating insights for a business. This article explains the meaning of data analytics, its different types, and top use cases for an organization.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Digital Transformation" src="https://cdn-icons-png.flaticon.com/512/6528/6528214.png" style={{ height: '200px', width: '100%', objectFit: 'contain' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Digital Transformation</h3>
                  <p className="card-text">Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="container">
          <h2 style={{ textAlign: 'center', margin: '2rem 0', overflow:'hidden' }}>Mission / Vision</h2>
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <img src={mission} alt="Mission" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3 style={{overflow: 'hidden'}}>Our Mission</h3>
              <p>Our mission is to deliver cutting-edge technology that enables customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life. 
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={vision} alt="Vision" className="img-fluid"  style={{height:'20%'}}/>
            </div>
            <div className="col-md-6 order-md-1">
              <h3 style={{overflow: 'hidden'}}>Our Vision</h3>
              <p>Our vision is to pioneer transformative digital solutions that empower our customers to achieve optimal efficiency, security, and innovation for global development.</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Main;

import React from 'react';
// import Aboutus from '../../assets/Team-Work_Mesa-de-trabajo-1.svg';
// import vision from '../../assets/vision.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCloudDone } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { TbTransformFilled } from "react-icons/tb";
import Missions from '../../assets/missions.png'
import Visions from '../../assets/visions.png'

import { Fade } from 'react-awesome-reveal';

import './Main.css'

const Main = () => {
  return (
    <>
      <Fade>
        <div id="main">
          <div className="container">
            <div className="row">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                <h1 style={{overflow:'hidden', fontWeight:'500', fontSize:'50px', marginBottom:'100px', marginTop:'100px', color:'#dc3545'}}>About Us</h1>
                </div>
              <div className="col-xs-12 col-md-6">
                <img src='https://images.stockcake.com/public/0/2/f/02f98d6e-9732-498d-af4f-d8f3d4d708ec_large/team-strategy-meeting-stockcake.jpg' className="img-responsive" alt="Hero" style={{ width: '100%', marginBottom: '0', height: '80%' , borderRadius:'20px'}} />
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <p><span style={{ color: '#dc3545', fontSize: '30px' }}>ScaledAI</span> is a leading technology solutions provider dedicated to empowering organization to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</p>
                  <h5 style={{ overflow: 'hidden' }}>Vision and Mission of the company</h5>
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
        <div className="container">
          <div className="heading-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1 style={{ overflow: 'hidden', color:'#dc3545' }}>Our Capabilities</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{border:'1px solid', borderRadius:'9px'}}>
                <IoCloudDone className='card-icon' style={{ height: '150px', width: '100%', objectFit:'contain', marginTop:'15px' }} alt='Cloud and Infrastructure' />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cloud & Infrastructure</h3>
                  <p className="card-text">Optimize your IT landscape with scalable cloud and infrastructure solutions. Our cloud solutions provide end-to-end cloud engineering services for seamless enterprise-wide cloud transformation. We support our customers in evaluating cloud readiness, formulating a cloud strategy, choosing between public, private and hybrid models, and identifying the best operating model to meet their requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{border:'1px solid', borderRadius:'9px'}}>
                <RiSecurePaymentFill className='card-icon' alt="Cybersecurity, Risk & Compliance" style={{ height: '150px', width: '100%', objectFit:'contain', marginTop:'15px' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cybersecurity, Risk & Compliance</h3>
                  <p className="card-text">Safeguard your organization with advanced cyber security, risk, and compliance services. Our team provides support for compliance audits, assess risk, categorize risk, implement the proper controls to protect your company and customers from cyber threats. We partner with your IT teams, to ensure that your system is secure and is compliant with Federal, DoD and State requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{border:'1px solid', borderRadius:'9px'}}>
                <LuBrainCircuit className='card-icon' alt="Data Analytics" style={{ height: '150px', width: '100%', objectFit:'contain', marginTop:'15px' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>AI and ML</h3>
                  <p className="card-text">Harness the power of Data, MachineLearning (ML), and Artificial Intelligence (AI) for transformative insights and propel your business forward.Our suite of AI services will help to redefine and automate your existing business processes and operating models to leverage AI at scale and drive better decisions with descriptive and predictive analytics. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{border:'1px solid', borderRadius:'9px'}}>
                <TbTransformFilled className='card-icon' alt="Digital Transformation"  style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop:'15px' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Digital Transformation</h3>
                  <p className="card-text">Accelerate innovation and efficiency through our comprehensive digital transformation expertise. Our Solution Engineers use DevOps driven continuous integration and agile framework to transform end-of-life, legacy applications with open, standards-based systems. These scalable solutions are security standard compliant, remove the technical debt and enhance application experience for your users. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="container">
          <h1 style={{ textAlign: 'center', margin: '2rem 0', overflow:'hidden', color:'#dc3545' }}>Mission and Vision</h1>
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <img src={Missions} alt="Mission" className="img-fluid" style={{height:'65%', borderRadius:'20px'}} />
            </div>
            <div className="col-md-6">
              <h3 style={{overflow: 'hidden'}}>Our Mission</h3>
              <p>Our mission is to deliver cutting-edge technology that enables customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life. 
              </p>
            </div>
          </div>
          <div className="row align-items-center" style={{marginBottom:'30px'}}>
            <div className="col-md-6 order-md-2">
              <img src={Visions} alt="Vision" className="img-fluid"  style={{height:'10%', borderRadius:'20px'}}/>
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

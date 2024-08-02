import React from 'react';
// import Aboutus from '../../assets/Team-Work_Mesa-de-trabajo-1.svg';
// import vision from '../../assets/vision.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCloudDone } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { TbTransformFilled } from "react-icons/tb";
import Missions from '../../assets/Images/missions.png'
import Visions from '../../assets/Images/visions.png'

import { Fade } from 'react-awesome-reveal';

import './Main.css'

const Main = () => {
  return (
    <>

      <Fade>
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="heading-container">
                <h1 className="card-title responsive-title" style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Overview
                </h1>
              </div>
              <div className="top" style={{ padding: "50px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 -10px",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.10) 0px 6px 6px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      maxWidth: "1000px",
                      width: "100%",
                      textAlign: "left",
                      marginBottom: "15px",
                      marginTop: "5px",
                    }}
                  >
                    <div className="card-body" style={{ padding: "20px" }}>

                      <p style={{ color: "#555", lineHeight: "2.2", fontSize: "20px" }}>
                        In today's fast-paced digital landscape, agile adaptation to emerging technologies is crucial for staying competitive. At ScaledAI, we specialize in providing digital engineering and IT solutions that enable businesses to maneuver through these changes successfully. With a focus on outcome-driven approaches, we help our clients capitalize new opportunities and attain sustainable growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                <h1 style={{ overflow: 'hidden', fontWeight: '500', fontSize: '50px', marginBottom: '40px', marginTop: '50px', color: '#dc3545' }}>About Us</h1>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src='https://images.stockcake.com/public/0/1/7/017d5c2c-3f69-45aa-a1d7-20b0bebc677d_large/team-celebrates-success-stockcake.jpg' className="img-responsive" alt="Hero" style={{ width: '100%', marginBottom: '0', height: '100%', borderRadius: '20px' }} />
              </div>
              <div className="col-xs-12 col-md-6 md-mt-5">
                <div className="about-text" style={{marginLeft:'30px', marginTop:'5px'}}>
                  <p style={{ fontSize: '20px', fontWeight: '400', textAlign:'left', lineHeight:'32px',marginTop:'5px',  whiteSpace:'balance'}}><span style={{ color: '#dc3545', fontSize: '30px', fontWeight: '500' }}>ScaledAI</span> stands as a leading provider of transformative technology solutions, empowering both commercial enterprises and federal agencies to achieve their core missions. Our commitment is to deliver tailored, impactful   solutions that propel organizations forward in an ever-evolving digital landscape. Our team comprises seasoned professionals with extensive expertise and a deep understanding of federal agencies' distinct challenges. Committed to driving impactful change, we specialize in managing complex technology transformations and delivering innovative solutions for the public sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fade>
          <div className="container">
            <h1 style={{ textAlign: 'center', margin: '2rem 0', overflow: 'hidden', color: '#dc3545', marginTop: '100px', marginBottom: '100px', fontWeight: '500', fontSize: '50px' }}>Mission and Vision</h1>
            <div className="row align-items-center mb-4">
              <div className="col-md-6">
                <p style={{ fontSize: '20px', fontWeight: '400' }}>Our<span style={{ color: '#dc3545' }}> mission</span> is to deliver cutting-edge technology that enables customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Missions} alt="Mission" className="img-fluid" style={{ height: '65%', borderRadius: '20px' }} />
              </div>
            </div>
            <div className="row align-items-center" style={{ marginBottom: '30px' }}>
              <div className="col-md-6 order-md-2">
                <p style={{ fontSize: '20px', fontWeight: '400' }}>Our <span style={{ color: '#dc3545' }}>vision</span> is to pioneer transformative digital solutions that empower our customers to achieve optimal efficiency, security, and innovation for global development.</p>
              </div>
              <div className="col-md-6 order-md-1">
                <img src={Visions} alt="Vision" className="img-fluid" style={{ height: '10%', borderRadius: '20px' }} />
              </div>
            </div>
          </div>
        </Fade>
        <div className="container">
          <div className="heading-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1 style={{ overflow: 'hidden', color: '#dc3545' }}>Our Capabilities</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{ border: '1px solid', borderRadius: '9px' }}>
                <LuBrainCircuit className='card-icon' style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop: '15px' }} alt='Cloud and Infrastructure' />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>AI and ML</h3>
                  <p className="card-text">
                    Harness the power of Data, MachineLearning (ML), and Artificial Intelligence (AI) for transformative insights and propel your business forward.Our suite of AI services will help to redefine and automate your existing business processes and operating models to leverage AI at scale and drive better decisions with descriptive and predictive analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{ border: '1px solid', borderRadius: '9px' }}>
                <RiSecurePaymentFill className='card-icon' alt="Cybersecurity, Risk & Compliance" style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop: '15px' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cybersecurity, Risk & Compliance</h3>
                  <p className="card-text">Safeguard your organization with advanced cyber security, risk, and compliance services. Our team provides support for compliance audits, assess risk, categorize risk, implement the proper controls to protect your company and customers from cyber threats. We partner with your IT teams, to ensure that your system is secure and is compliant with Federal, DoD and State requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{ border: '1px solid', borderRadius: '9px' }}>
                <IoCloudDone className='card-icon' alt="Data Analytics" style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop: '15px' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cloud & Infrastructure</h3>
                  <p className="card-text">
                    Optimize your IT landscape with scalable cloud and infrastructure solutions. Our cloud solutions provide end-to-end cloud engineering services for seamless enterprise-wide cloud transformation. We support our customers in evaluating cloud readiness, formulating a cloud strategy, choosing between public, private and hybrid models, and identifying the best operating model to meet their requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100" style={{ border: '1px solid', borderRadius: '9px' }}>
                <TbTransformFilled className='card-icon' alt="Digital Transformation" style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop: '15px' }} />
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
    </>
  );
};

export default Main;

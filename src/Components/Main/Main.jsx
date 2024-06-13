import React from 'react';
import About from '../../assets/about-removebg-preview.png';
import Aboutus from '../../assets/Team-Work_Mesa-de-trabajo-1.svg';
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
            <h1 style={{ overflow: 'hidden', textDecoration: 'underline 2px red' }}>Domains we work in</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Cloud & Infrastructure" src="https://i.pinimg.com/originals/7d/32/c6/7d32c6a963d45d62b7cc2a70e2b72a2a.png" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cloud & Infrastructure</h3>
                  <p className="card-text">Cloud Infrastructure is the collection of hardware and software elements such as computing power, networking, storage, and virtualization resources needed to enable cloud computing. Cloud infrastructure types usually also include a user interface (UI) for managing these virtual resources.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Cybersecurity, Risk & Compliance" src="https://st.depositphotos.com/60430652/53667/v/450/depositphotos_536678434-stock-illustration-cybersecurity-icon-thin-linear-cybersecurity.jpg" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Cybersecurity, Risk & Compliance</h3>
                  <p className="card-text">At its core, cybersecurity compliance means adhering to standards and regulatory requirements set forth by some agency, law or authority group. Organizations must achieve compliance by establishing risk-based controls that protect the confidentiality, integrity and availability (CIA) of information.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img className="card-img-top" alt="Data Analytics" src="https://static.vecteezy.com/system/resources/previews/015/999/739/original/data-analytics-icon-free-vector.jpg" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
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
                <img className="card-img-top" alt="Digital Transformation" src="https://imageio.forbes.com/specials-images/imageserve/64880883c11f32f4258d81e4/The-5-Biggest-Misconceptions-About-Digital-Transformation/960x0.jpg?height=503&width=711&fit=bounds" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div className="card-body">
                  <h3 className="card-title" style={{ overflow: 'hidden' }}>Digital Transformation</h3>
                  <p className="card-text">Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>
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

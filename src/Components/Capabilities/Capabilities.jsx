import React from 'react';
import { FaCloud, FaClipboardCheck, FaShieldAlt, FaSyncAlt, FaRegListAlt, FaChartLine } from 'react-icons/fa'; // You can use any icons library, here I'm using react-icons
import { RiGovernmentLine} from 'react-icons/ri' 
import { MdOutlineEngineering, MdDeveloperMode,MdOutlineSecurity,MdOutlineBrightnessAuto  } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoCloudDoneSharp } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiSpringsecurity,SiAwsorganizations} from "react-icons/si";
import { GiProgression,GiDatabase, GiChart, GiCircuitry } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa6";
import { GoShield } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";


import {Fade} from 'react-awesome-reveal'
import './Capabilities.css'

const Capabilities = () => {
  return (
    <>

<div className="top-heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px', color: '#dc3545' }}>
        <h1 style={{ textDecoration: '3px underline', textAlign: 'center', textUnderlineOffset:'5px', overflow:'hidden' }}>Capabilities</h1>
      </div>
      <div className="top" style={{padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 -10px' }}>
          <div className="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.10) 0px 6px 6px', borderRadius: '10px', overflow: 'hidden', maxWidth: '1000px', width: '100%', textAlign: 'center', marginBottom: '10px' }}>
            <div className="card-body" style={{ padding: '20px' }}>
              <h2 style={{ marginBottom: '20px', color: '#dc3545', overflow: 'hidden' }}>Overview</h2>
              <p style={{ color: '#555', lineHeight: '2.6' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, culpa labore? Assumenda deserunt officiis eius molestias fugit magnam delectus accusantium laudantium dolore tenetur, quibusdam nobis hic, blanditiis odio dignissimos. Adipisci!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px', color: '#dc3545' }}>
        <h1 style={{ overflow: 'hidden', textDecoration: '1px solid underline', textUnderlineOffset:'5px' }}>Domains we work in</h1>
      </div>
      {/* Cloud Cards */}
      
      <div style={{ margin: '20px 0',width: '100vw', backgroundColor: '#d3d3d3', padding:'20px'}}>
      <Fade  duration={1000} triggerOnce='true'>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', width: '80vw', margin: '0 auto' }}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h2 style={{ overflow: 'hidden', padding: '10px' }}>Cloud Computing</h2>
            <div className="icons-grid">
              <div className="icon-item">
                <FaCloud className='icon'  />
                <p>Cloud Strategy</p>
              </div>
              <div className="icon-item">
                <IoCloudDoneSharp className='icon'  />
                <p>Cloud Readiness Evaluation</p>
              </div>
              <div className="icon-item">
                <GrCloudSoftware   className='icon'  />
                <p>Cloud Applications</p>
              </div>
              <div className="icon-item">
                <FaShieldAlt className='icon'  />
                <p>Cloud Security</p>
              </div>
              <div className="icon-item">
                <FaSyncAlt className='icon'  />
                <p>Cloud Migration & Integration</p>
              </div>
              <div className="icon-item">
                <SiAwsorganizations className='icon'  />
                <p>Cloud Platform Governance</p>
              </div>
              <div className="icon-item">
                <FaChartLine className='icon'  />
                <p>High Performance Computing</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </div>
      {/* cyber Card */}
      <div style={{ margin: '20px 0',width: '100vw', padding:'20px'}}>
        <Fade duration={1000} triggerOnce='true'>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', width: '80vw', margin: '0 auto' }}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h2 style={{ overflow: 'hidden', padding: '10px' }}>Cyber Security, Risk and Compliance</h2>
            <div className="icons-grid">
              <div className="icon-item">
                <RiGovernmentLine className='icon'  />
                <p>Governance, Risk and Compliance</p>
              </div>
              <div className="icon-item">
                <MdOutlineEngineering className='icon'  />
                <p>Security Design & Engineering</p>
              </div>
              <div className="icon-item">
                <VscWorkspaceTrusted className='icon'  />
                <p>Zero Trust Cyber Architecture</p>
              </div>
              <div className="icon-item">
                <AiOutlineSecurityScan className='icon'  />
                <p>Intrusion Monitoring and Prevention</p>
              </div>
              <div className="icon-item">
                <MdOutlineSecurity className='icon'  />
                <p>Cybersecurity Defense</p>
              </div>
              <div className="icon-item">
                <SiSpringsecurity className='icon'  />
                <p>Security Operations Center (SOC)</p>
              </div>
              <div className="icon-item">
                <GoShield className='icon'  />
                <p>Threat Detection & Incident Management</p>
              </div>
              <div className="icon-item">
                <FaUserShield className='icon'  />
                <p>Vulnerability Management</p>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
      
      {/* Data Science */}
      <div style={{ margin: '20px 0',width: '100vw', backgroundColor: '#d3d3d3', padding:'20px'}}>
        <Fade  duration={1000} triggerOnce='true'>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', width: '80vw', margin: '0 auto' }}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h2 style={{ overflow: 'hidden', padding: '10px' }}> AI / ML</h2>
            <div className="icons-grid">
              <div className="icon-item">
                <GiDatabase className='icon'  />
                <p>Big Data Analytics</p>
              </div>
              <div className="icon-item">
                <LuBrainCircuit className='icon'  />
                <p>Machine Learning (ML)</p>
              </div>
              <div className="icon-item">
                <GiCircuitry className='icon'  />
                <p>Artificial Intelligence (AI)</p>
              </div>
              <div className="icon-item">
                <GiChart className='icon'  />
                <p>Predictive Analytics</p>
              </div>
              <div className="icon-item">
                <FaSyncAlt className='icon'  />
                <p>Data Visualization</p>
              </div>
              <div className="icon-item">
                <FaRegListAlt className='icon'  />
                <p>Data Driven Insights</p>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
      {/* Digital Transformation */}
      <div style={{ margin: '20px 0',width: '100vw',  padding:'20px'}}>
        <Fade  duration={1000} triggerOnce={true}>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '10px', width: '80vw', margin: '0 auto' }}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h2 style={{ overflow: 'hidden', padding: '10px' }}>Digital Transformation</h2>
            <div className="icons-grid">
              <div className="icon-item">
                <MdDeveloperMode className='icon'/>
                <p>Legacy Application Development</p>
              </div>
              <div className="icon-item">
                <FaClipboardCheck className='icon'  />
                <p>Low Code Solutions</p>
              </div>
              <div className="icon-item">
                <MdOutlineBrightnessAuto className='icon'  />
                <p>Process Automation</p>
              </div>
              <div className="icon-item">
                <FaShieldAlt className='icon'  />
                <p>System and Data Integrations</p>
              </div>
              <div className="icon-item">
                <FaSyncAlt className='icon'  />
                <p>Managed IT Operations</p>
              </div>
              <div className="icon-item">
                <FaRegListAlt className='icon'  />
                <p>Project Management</p>
              </div>
              <div className="icon-item">
                <GiProgression className='icon'  />
                <p>CMMI Appraisals</p>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>

    </>
  );
}

export default Capabilities;

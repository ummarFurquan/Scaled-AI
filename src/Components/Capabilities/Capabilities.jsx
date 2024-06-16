import React from 'react';
import { FaCloud, FaClipboardCheck, FaCog, FaShieldAlt, FaSyncAlt, FaRegListAlt, FaChartLine } from 'react-icons/fa'; // You can use any icons library, here I'm using react-icons
import './Capabilities.css'
const Capabilities = () => {
  return (
    <>

<div className="top-heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px', color: '#dc3545' }}>
        <h1 style={{ textDecoration: '3px underline', textAlign: 'center', textUnderlineOffset:'5px' }}>Capabilities</h1>
      </div>
      <div className="top" style={{ width: '100vw', backgroundColor: 'lightgray', padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 -10px' }}>
          <div className="card" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', maxWidth: '1000px', width: '100%', textAlign: 'center', marginBottom: '10px' }}>
            <div className="card-body" style={{ padding: '20px' }}>
              <h2 style={{ marginBottom: '20px', color: '#dc3545', overflow: 'hidden' }}>Overview</h2>
              <p style={{ color: '#555', lineHeight: '2.6' }}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, culpa labore? Assumenda deserunt officiis eius molestias fugit magnam delectus accusantium laudantium dolore tenetur, quibusdam nobis hic, blanditiis odio dignissimos. Adipisci!              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '10px', color: '#dc3545' }}>
        <h1 style={{ overflow: 'hidden', textDecoration: '1px solid underline', textUnderlineOffset:'5px' }}>Domains we work in</h1>
      </div>
      <div style={{ margin: '20px 0' }}>
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '80vw', margin: '0 auto' }}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <h2 style={{ overflow: 'hidden', padding: '10px' }}>Cloud Computing</h2>
            <div className="icons-grid">
              <div className="icon-item">
                <FaCloud size={50} />
                <p>Cloud Strategy</p>
              </div>
              <div className="icon-item">
                <FaClipboardCheck size={50} />
                <p>Cloud Readiness Evaluation</p>
              </div>
              <div className="icon-item">
                <FaCog size={50} />
                <p>Optimizing Applications</p>
              </div>
              <div className="icon-item">
                <FaShieldAlt size={50} />
                <p>Cloud Security Strategies</p>
              </div>
              <div className="icon-item">
                <FaSyncAlt size={50} />
                <p>Migrating and Implementing Cloud Platform</p>
              </div>
              <div className="icon-item">
                <FaRegListAlt size={50} />
                <p>Maintaining Governance for Cloud Platform</p>
              </div>
              <div className="icon-item">
                <FaChartLine size={50} />
                <p>High Performance Computing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Capabilities;

import React from 'react'

import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsPersonFillGear } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";





import './Accordian.css'


const Accordian = () => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
            Assessment and Strategy Development <BsGraphUp style={{ marginLeft: "20px", scale: '2' }} />
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body">
            <p>We begin by conducting a thorough assessment of your current systems and infrastructure. Our team of experts then collaborates with you to develop a strategic roadmap that aligns with your agency's goals and objectives.</p>
            <p style={{fontSize:'15px', fontWeight:'bold'}}>Key Elements:</p>
            <ul style={{ listStyleType: 'circle', color:'black'}}>
              <li>&#x2022; In-Depth Digital Assessment</li>
              <li>&#x2022; Customized Modernization Strategy</li>
              <li>&#x2022; Technology and Process Optimization</li>
              <li>&#x2022; Change Management Planning</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Tailored Solutions and Implementation <BsPersonFillGear style={{ marginLeft: '20px', scale: '2.1' }} />
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
          <p>Utilizing our deep industry knowledge and technical expertise, we design and implement tailored IT solutions that address your specific challenges. Our focus is on delivering scalable, secure, and efficient systems.
            </p>
            <p style={{fontSize:'15px', fontWeight:'bold'}}>Key Elements:</p>
            <ul>
              <li>&#x2022; Custom Software Development</li>
              <li>&#x2022; Cloud Migration and Integration</li>
              <li>&#x2022; AI and ML Solutions</li>
              <li>&#x2022; DevSecOps Integration and Automation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          Training and Knowledge Transfer <FaPersonChalkboard style={{ marginLeft: "20px", scale: '2' }} />
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div className="accordion-body">
          <p>Ensuring your team is equipped with the necessary skills and knowledge to manage and maintain new systems effectively.</p>
          <p style={{fontSize:'15px', fontWeight:'bold'}}>Key Elements:</p>
          <ul>
            <li>&#x2022; Comprehensive Training Programs</li>
            <li>&#x2022; Knowledge Transfer Sessions</li>
            <li>&#x2022; Ongoing Support and Resources</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
          Continuous Support and Optimization <MdOutlineSupportAgent style={{ marginLeft: "20px", scale: '2.5' }} />
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
          <div className="accordion-body">
           <p>Our commitment doesn’t end with implementation. We provide ongoing support and continuous optimization to ensure your systems remain up-to-date and perform at their best.</p>
           <p style={{fontSize:'15px', fontWeight:'bold'}}>Key Elements:</p>
           <ul>
            <li>&#x2022; Proactive Monitoring and Maintenance</li>
            <li>&#x2022; Regular System Updates and Improvements</li>
           </ul>
           </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
          Build Long-Lasting Client Relations <VscWorkspaceTrusted style={{ marginLeft: "20px", scale: '2' }} />
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
          <div className="accordion-body">
           <p>Our priority is to delve deep into our clients' business goals, challenges, and pain points. This insight drives our ability to engineer solutions tailored precisely to their individual needs
           </p>
           <p style={{fontSize:'15px', fontWeight:'bold'}}>Key Elements:</p>
           <ul>
            <li>&#x2022; Foster Transparency and Effective Communication</li>
            <li>&#x2022; Deliver Optimal Solutions</li>
            <li>&#x2022; Build Trust through Partnership</li>
           </ul>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Accordian

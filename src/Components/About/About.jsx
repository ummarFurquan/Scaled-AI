import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  const aboutUsContent = "<b>Agilitnet</b> is a leading technology solutions provider dedicated to empowering government agencies to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.";

  const valuesContent = `
  <p><strong>TEAM</strong></p>
  <ul style={{lineHeight:'10px'}}>
    <li style={{lineHeight:'20px'}}><strong>T - Trust:</strong> Trust is the cornerstone of our relationships, both internally and externally. We foster an environment where trust is earned through honesty, transparency, and reliability.</li>
    <li style={{lineHeight:'20px'}}><strong>E - Empowerment:</strong> We empower our team to take initiative, make decisions, and innovate. By providing autonomy and support, we enable individuals to reach their full potential and contribute to the success of the team.</li>
    <li style={{lineHeight:'20px'}}><strong>A - Agility:</strong> Agility is our ability to adapt and respond quickly to changing circumstances and opportunities. We embrace flexibility and nimbleness, allowing us to stay ahead of the curve and seize new possibilities.</li>
    <li style={{lineHeight:'20px'}}><strong>M - Mutual Respect:</strong> We value diversity and treat every individual with dignity and respect. By fostering an inclusive culture where differences are celebrated, we create a sense of belonging and mutual appreciation within our team.</li>
  </ul>
`;

const MissionContent = 'Our mission is to deliver <b>cutting-edge technology</b> that enable customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life.';
  const VisionContent = "Our Vision is to pioneer transformative digital solutions that empower our customers to achieve optimal efficiency, security, and innovation for global development."
const [content, setContent] = useState(aboutUsContent);
  const [activeButton, setActiveButton] = useState('aboutUs');

  const handleButtonClick = (buttonName, buttonContent) => {
    setActiveButton(buttonName);
    setContent(buttonContent);
  };

 

  return (
    <div className="container" style={{marginBottom:'100px'}}>
      <div className="image container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src='https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg' alt='About Image' />
        <div className="btn-container my-3">
          <button className={`btn btn-danger mx-5 ${activeButton === 'aboutUs' ? 'active' : ''}`} onClick={() => handleButtonClick('aboutUs', aboutUsContent)}>ABOUT US</button>
          <button className={`btn btn-danger mx-5 ${activeButton === 'OurMission' ? 'active' : ''}`} onClick={() => handleButtonClick('OurMission', MissionContent)}>OUR MISSION</button>
          <button className={`btn btn-danger mx-5 ${activeButton === 'OurVision' ? 'active' : ''}`} onClick={() => handleButtonClick('OurVision', VisionContent)}>OUR VISION</button>
          <button className={`btn btn-danger mx-5 ${activeButton === 'values' ? 'active' : ''}`} onClick={() => handleButtonClick('values', valuesContent)}>WHAT WE VALUE</button>
        </div>
        <Fade>
          <div className="para-container my-3" style={{ borderLeft: '2px solid grey', backgroundColor:'lightgray', padding: '30px' }}>
            <h5 dangerouslySetInnerHTML={{ __html: content }}></h5>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;

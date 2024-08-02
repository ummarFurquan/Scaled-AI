import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
// import AboutImg from '../../assets/Images/about-new.jpg'
import './About.css';
import Approach from '../Approach/Approach';

const About = () => {
  const aboutUsContent = `<div style="overflow-y:hidden;">
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden; margin-bottom: 10px;">About Us</h1>
  </div>
  <b>ScaledAI</b> is a leading technology solutions provider dedicated to empowering commercial and federal organizations to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</div>`;

  const valuesContent = `
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden;">Our Values</h1>
  </div>
  <li class="value-item" style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div class="circle" style="width: 90px; height: 50px; border-radius: 50%; background-color: #dc3545; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 30px; margin-right: 20px;">T</div>
  <div style="flex-grow: 1;">
    <div  style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden; overflow-x:hidden">
      <strong class="heading">Trust:</strong> Trust is the cornerstone of our relationships, both internally and externally. We foster an environment where trust is earned through honesty, transparency, and reliability.
    </div>
  </div>
</li>

<li class="value-item" style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div class="circle" style="width: 110px; height: 50px; border-radius: 50%; background-color: #dc3545; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 30px; margin-right: 20px;">E</div>
  <div style="flex-grow: 1;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong class="heading">Empowerment:</strong> We empower our team to take initiative, make decisions, and innovate. By providing autonomy and support, we enable individuals to reach their full potential and contribute to the success of the team.
    </div>
  </div>
</li>

<li class="value-item" style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div class="circle" style="width: 110px; height: 50px; border-radius: 50%; background-color: #dc3545; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 30px; margin-right: 20px;">A</div>
  <div style="flex-grow: 1;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong class="heading" style= "padding: 5px;">Agility:</strong> Agility is our ability to adapt and respond quickly to changing circumstances and opportunities. We embrace flexibility and nimbleness, allowing us to stay ahead of the curve and seize new possibilities.
    </div>
  </div>
</li>

<li class="value-item" style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div class="circle" style="width: 110px; height: 50px; border-radius: 50%; background-color: #dc3545; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 30px; margin-right: 20px; ">M</div>
  <div style="flex-grow: 3;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong class="heading">Mutual Respect:</strong> We value diversity and treat every individual with dignity and respect. By fostering an inclusive culture where differences are celebrated, we create a sense of belonging and mutual appreciation within our team.
    </div>
  </div>
</li>
`;

  const MissionContent = `
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden; margin-bottom: 10px;">Our Mission</h1>
  </div>
  <div style="overflow-y:hidden;">Our mission is to deliver cutting-edge technology that enables customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life.</div>`;
  const VisionContent = `
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden; margin-bottom: 10px;">Our Vision</h1>
  </div>
    <div style="overflow-y:hidden;">Our Vision is to pioneer transformative digital solutions that empower our customers to achieve optimal efficiency, security, and innovation for global development.</div>`;

  const [content, setContent] = useState(aboutUsContent);
  const [activeButton, setActiveButton] = useState('aboutUs');

  const handleButtonClick = (buttonName, buttonContent) => {
    setActiveButton(buttonName);
    setContent(buttonContent);
  };

  return (
    <>
      <Fade>
        <img className='about-hero-image' src='https://images.stockcake.com/public/0/2/f/02f98d6e-9732-498d-af4f-d8f3d4d708ec_large/team-strategy-meeting-stockcake.jpg' style={{ width: '100vw', height: '70vh', objectFit: 'cover' , mixBlendMode:''}} alt='About' />
        <div className="container" style={{ marginBottom: '90px' }}>
          <div className="image container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px', width: '100vw' }}>
            <div className="btn-container my-3">
              <button className={`btn btn-outline-danger mx-5  ${activeButton === 'aboutUs' ? 'active' : ''}`} onClick={() => handleButtonClick('aboutUs', aboutUsContent)}>ABOUT US</button>
              <button className={`btn btn-outline-danger mx-5 ${activeButton === 'OurMission' ? 'active' : ''}`} onClick={() => handleButtonClick('OurMission', MissionContent)}>OUR MISSION</button>
              <button className={`btn btn-outline-danger mx-5 ${activeButton === 'OurVision' ? 'active' : ''}`} onClick={() => handleButtonClick('OurVision', VisionContent)}>OUR VISION</button>
              <button className={`btn btn-outline-danger mx-5 ${activeButton === 'values' ? 'active' : ''}`} onClick={() => handleButtonClick('values', valuesContent)}>WHAT WE VALUE</button>
            </div>

            <div className="para-container my-3" style={{ borderLeft: '2px solid red', padding: '20px', fontSize: '30px', fontWeight: '500' }}>
              <h5 dangerouslySetInnerHTML={{ __html: content }}></h5>
            </div>
          </div>
        </div>
        <Approach />
      </Fade>
    </>
  );
}

export default About;

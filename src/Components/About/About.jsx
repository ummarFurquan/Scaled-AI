import React, { useState} from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  const aboutUsContent = `<div style="overflow-y:hidden;">
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden; margin-bottom: 10px;">About Us</h1>
  </div>
  <b>Agilitnet</b> is a leading technology solutions provider dedicated to empowering government agencies to fulfill their mission. With expertise in managing technology transformation initiatives, we navigate the complexities of the public sector to drive impactful change and innovation.</div>`;

  const valuesContent = `
  <div style="display: flex; justify-content:center; align-items:center;">
  <h1 style="overflow-y:hidden; overflow-x:hidden;">What we value?</h1>
  </div>
  <li style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div style="width: 60px; height: 50px; border-radius: 50%; background-color: #ff0000; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 24px; margin-right: 20px;">T</div>
  <div style="flex-grow: 1;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden; overflow-x:hidden">
      <strong>Trust:</strong> is the cornerstone of our relationships, both internally and externally. We foster an environment where trust is earned through honesty, transparency, and reliability.
    </div>
  </div>
</li>

<li style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div style="width: 75px; height: 50px; border-radius: 50%; background-color: #ff0000; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 24px; margin-right: 20px;">E</div>
  <div style="flex-grow: 1;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong>Empowerment:</strong> We empower our team to take initiative, make decisions, and innovate. By providing autonomy and support, we enable individuals to reach their full potential and contribute to the success of the team.
    </div>
  </div>
</li>

<li style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div style="width: 75px; height: 50px; border-radius: 50%; background-color: #ff0000; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 24px; margin-right: 20px;">A</div>
  <div style="flex-grow: 1;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong>Agility:</strong> Agility is our ability to adapt and respond quickly to changing circumstances and opportunities. We embrace flexibility and nimbleness, allowing us to stay ahead of the curve and seize new possibilities.
    </div>
  </div>
</li>

<li style="list-style:none; display: flex; align-items: center; margin-bottom: 20px;">
  <div style="width: 75px; height: 50px; border-radius: 50%; background-color: #ff0000; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; font-size: 24px; margin-right: 20px; ">M</div>
  <div style="flex-grow: 3;">
    <div style="display: flex; flex-direction: column; align-items: flex-start; overflow-y:hidden;">
      <strong>Mutual Respect:</strong> We value diversity and treat every individual with dignity and respect. By fostering an inclusive culture where differences are celebrated, we create a sense of belonging and mutual appreciation within our team.
    </div>
  </div>
</li>

`;
    // <img src='https://media.istockphoto.com/id/1166212364/photo/team-acronym-concept.jpg?s=612x612&w=0&k=20&c=e-OQUV_uRUzOJhcLjJuKiQYZp6KsrxfhBW2eu6hES6E=' alt='Team Image' style="margin-top: 20px;"/>


const MissionContent = `<div style="overflow-y:hidden;">Our mission is to deliver <b>cutting-edge technology</b> that enable customers to fulfill their mission of serving society, driving positive change, and enhancing quality of life.</div>`;
  const VisionContent =`<div style="overflow-y:hidden;">Our Vision is to pioneer transformative digital solutions that empower our customers to achieve optimal efficiency, security, and innovation for global development.</div>`;
const [content, setContent] = useState(aboutUsContent);
  const [activeButton, setActiveButton] = useState('aboutUs');

  const handleButtonClick = (buttonName, buttonContent) => {
    setActiveButton(buttonName);
    setContent(buttonContent);
  };

 

  return (
    <div className="container" style={{marginBottom:'100px'}}>
      <div className="image container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src='https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg' alt='About' />
        <div className="btn-container my-3">
          <button className={`btn btn-outline-danger mx-5 ${activeButton === 'aboutUs' ? 'active' : ''}`} onClick={() => handleButtonClick('aboutUs', aboutUsContent)}>ABOUT US</button>
          <button className={`btn btn-outline-danger mx-5 ${activeButton === 'OurMission' ? 'active' : ''}`} onClick={() => handleButtonClick('OurMission', MissionContent)}>OUR MISSION</button>
          <button className={`btn btn-outline-danger mx-5 ${activeButton === 'OurVision' ? 'active' : ''}`} onClick={() => handleButtonClick('OurVision', VisionContent)}>OUR VISION</button>
          <button className={`btn btn-outline-danger mx-5 ${activeButton === 'values' ? 'active' : ''}`} onClick={() => handleButtonClick('values', valuesContent)}>WHAT WE VALUE</button>
        </div>
        <Fade>
          <div className="para-container my-3" style={{ borderLeft: '2px solid grey', backgroundColor:'#e5e5e5', padding: '10px' }}>
            <h5 dangerouslySetInnerHTML={{ __html: content }}></h5>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;

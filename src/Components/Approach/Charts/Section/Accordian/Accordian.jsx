import React from 'react'
import { BiConversation } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

import './Accordian.css'


const Accordian = () => {
  return (
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
      Engage with our customers  <IoPeopleSharp style={{ marginLeft: "20px", scale:'2' }} />
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      <strong>Our priority</strong> is to delve deep into our clients' business goals, challenges, and pain points. This insight drives our ability to engineer solutions tailored precisely to their individual needs      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Foster transparency<br/> and effective communication <BiConversation  style={{ marginLeft:'20px',scale:'2.1' }}/>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      From the moment of initial discussions to the final stages of the project,<strong>we maintain ongoing communication with our customers</strong>. We value their input and promptly address any feedback, ensuring their needs are met throughout the process.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Provide optimal solutions <FaHandsHelping  style={{ marginLeft: "20px", scale:'2.5' }}/>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      Our commitment lies in <strong>delivering optimal solutions to our clients.</strong> Employing cutting-edge technologies and industry best practices, we guarantee the effectiveness, efficiency, and reliability of our solutions      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      Build trust through partnership <FaPeopleGroup  style={{ marginLeft: "20px", scale:'2.5' }}/>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      Our goal is to <strong>forge lasting partnerships with our clients</strong>, going beyond the traditional vendor-client relationship. We are deeply invested in our client’s success and will extend every effort to help them realize their objectives.</div>
    </div>
  </div>
</div>
  )
}

export default Accordian

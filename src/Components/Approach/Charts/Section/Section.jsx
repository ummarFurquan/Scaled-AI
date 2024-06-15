import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSecurity, MdFeedback } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiTeacher,GiConversation } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { IoDocumentAttach } from "react-icons/io5";






const Section = () => {
  return (
    <div style={{marginTop:'20px', marginBottom:'30px'}}>
      <VerticalTimeline lineColor='red'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="1. Compliance and Security"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdOutlineSecurity/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Compliance and Security</h3>
          <p>
            We prioritize compliance and security measures to ensure that our solutions meet stringent government regulations and standards, providing peace of mind to our clients.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2. Needs Assessments"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaHandsHelping/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Needs Assessments</h3>
          <p>
            Our team regularly conducts thorough needs assessments and evaluations to ensure that our solutions are tailored to the specific requirements and objectives of the clients we serve.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3. Training Sessions"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiTeacher/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Training Sessions</h3>
          <p>
            We offer personalized training sessions and workshops to empower our clients to fully utilize and maximize the benefits of our solutions, fostering self-sufficiency and long-term success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="4. Proactive Communication"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiConversation/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Proactive Communication</h3>
          <p>
            Our company maintains proactive communication channels, including dedicated client liaisons and regular status updates, to keep our clients informed and engaged throughout every stage of their project or partnership.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="5. Feedback and Improvement"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<VscFeedback/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Feedback and Improvement</h3>
          <p>
            We actively seek feedback from our government clients and utilize this input to continuously refine and improve our solutions, demonstrating our commitment to ongoing collaboration and responsiveness to their evolving needs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6. Documentation and Resources"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoDocumentAttach/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Documentation and Resources</h3>
          <p>
            We provide comprehensive documentation and resources, such as user guides and best practices manuals, to support our government clients in effectively utilizing and maintaining our solutions over the long term.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Section;

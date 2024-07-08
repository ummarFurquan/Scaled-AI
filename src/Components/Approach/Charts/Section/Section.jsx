import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSecurity} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";




import { GrOptimize } from "react-icons/gr";

const Section = () => {
  return (
    <div style={{marginTop:'20px', marginBottom:'30px'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'30px'}}>
        <h1 style={{overflow:'hidden', color:'red'}}>Key Benefits of Partnering with ScaledAI </h1>
        </div>
      <VerticalTimeline lineColor='#dc3545'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GrOptimize/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden', paddingBottom:'10px'}}>Enhanced Efficiency and Productivity</h3>
          <p>
          Our modern IT solutions streamline your agency’s operations, reducing redundancy and improving workflow efficiency. By automating routine tasks and optimizing processes, we enable your team to focus on higher-value activities. This leads to significant productivity gains and faster achievement of organizational goals.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdOutlineSecurity/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden',paddingBottom:'10px'}}>Improved Security and Compliance</h3>
          <p>
          We prioritize cybersecurity, ensuring that your systems are protected against evolving threats. Our solutions are designed to comply with federal regulations and standards, safeguarding sensitive data and maintaining the integrity of your operations. With robust security measures in place, you can operate with confidence and peace of mind.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaArrowTrendUp/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden', paddingBottom:'10px'}}>Scalability and Flexibility</h3>
          <p>
          Our scalable IT solutions are designed to grow with your agency, accommodating increasing demands and evolving requirements. Whether it's expanding your digital infrastructure or integrating new technologies, we provide the flexibility needed to adapt to change. This ensures your agency remains agile and responsive in a dynamic environment.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdAttachMoney/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden'}}>Cost-Effective Solutions</h3>
          <p>
          We optimize your IT budget by providing cost-effective solutions that deliver maximum value. Through efficient resource allocation and strategic planning, we help you achieve your digital transformation goals without exceeding budget constraints. Our focus on ROI ensures that every investment contributes to long-term success.          
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<TbWorldSearch/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden',paddingBottom:'10px'}}>Expertise and Innovation</h3>
          <p>
          Our team of seasoned professionals brings deep expertise and innovative thinking to every project. We stay ahead of industry trends and leverage cutting-edge technologies to provide state-of-the-art solutions. By partnering with us, you gain access to a wealth of knowledge and innovative approaches that drive continuous improvement.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaHandsHelping/>}
        >
          <h3 className="vertical-timeline-element-title" style={{overflow:'hidden',paddingBottom:'10px'}}>Comprehensive Support and Maintenance</h3>
          <p>
          Our commitment to your success extends beyond implementation with ongoing support and maintenance. We provide proactive monitoring, regular system updates, and 24/7 technical assistance to ensure your IT infrastructure operates smoothly. This comprehensive support minimizes downtime and ensures your systems remain reliable and efficient.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Section;

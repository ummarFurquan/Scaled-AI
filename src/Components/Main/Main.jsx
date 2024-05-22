import React, { useRef } from 'react'
import styles from './main.module.css'

const Main = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.texts}>
          <h1>
            <span style={{color:'red', background:'transparent'}}>"</span>
            Empowerment through technology, Impact through Solutions
            <span style={{color:'red', background:'transparent'}}>"</span>
          </h1>
          <h2>Driving Digital experience, together</h2>
          <button className={styles.explore} onClick={scrollToSection}>
            Explore More &#x2193;
          </button>
        </div>
      </div>
      <div id='section' ref={sectionRef} className={styles.section}>
      </div>
    </>
  );
}

export default Main

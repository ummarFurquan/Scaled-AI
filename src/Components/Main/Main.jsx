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
          <h1> Empowerment through <span style={{background:'transparent', color:'red'}}>Technology</span>, Impact through <span style={{background:'transparent', color:'red'}}>Solutions</span></h1>
          <button className={styles.explore} onClick={scrollToSection}>
            Explore More &#x2193;
          </button>
        </div>
      </div>
      <div id='section' ref={sectionRef} className={styles.section}>
        <h1 className={styles.overView_heading}>Overview</h1>
        <div className='overView_para'>

        </div>
        <div className={styles.overView_img}>

        </div>
      </div>
    </>
  );
}

export default Main

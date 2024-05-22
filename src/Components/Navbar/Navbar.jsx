import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg.jpg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt='Logo' />
      <nav>
        <ul className={styles.nav_links}>
          <li className={styles.links}>
          <Link to="/" aria-label="About Us">Home</Link>
          </li>
          <li className={styles.links}>
            <Link to="/about" aria-label="About Us">About Us</Link>
          </li>
          <li className={styles.links}>
            <Link to="/services" aria-label="Services">Services</Link>
          </li>
          <li className={styles.links}>
            <Link to="/approach" aria-label="Our Approach">Our Approach</Link>
          </li>
          <li className={styles.links}>
            <Link to="/capabilities" aria-label="Capabilities">Capabilities</Link>
          </li>
        </ul>
      </nav>
      <a className={styles.cta} href="/contact" aria-label="Contact Us">
        <button className={styles.contact}>Contact Us</button>
      </a>
    </header>
  );
};

export default Navbar;

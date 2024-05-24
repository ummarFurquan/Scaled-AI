import React from 'react'
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#A9A9A9' }}>
        <div className="container">
          <Link to="/" className="navbar">
            <img src={Logo} alt='Agilitnet Logo' style={{ width: '140px', mixBlendMode: 'darken' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2" style={{marginRight:'45px'}} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active mx-2">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/approach" className="nav-link active mx-2">Our Approach</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active mx-2">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/capabilities" className="nav-link active mx-2">Capabilities</Link>
              </li>
            </ul>
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>Contact Us</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
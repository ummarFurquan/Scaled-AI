import React from 'react'
import Logo from '../../assets/logo.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary border" style={{ backgroundColor: 'wheat', boxShadow:' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
        <div className="container">
          <a href="/" className="navbar">
            <img src={Logo} alt='Agilitnet Logo' style={{ width: '140px', mixBlendMode: 'darken' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active mx-2" style={{marginRight:'45px'}} aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a href='/about' className="nav-link active mx-2">About Us</a>
              </li>
              <li className="nav-item">
                <a  href="/approach" className="nav-link active mx-2">Our Approach</a>
              </li>
              <li className="nav-item">
                <a  href="/services" className="nav-link active mx-2">Services</a>
              </li>
              <li className="nav-item">
                <a href="/capabilities" className="nav-link active mx-2">Capabilities</a>
              </li>
            </ul>
            <a href='/contact' style={{color:'white', textDecoration:'none'}}>
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
                Contact Us
                </button>
                </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
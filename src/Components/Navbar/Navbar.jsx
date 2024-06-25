import React from 'react'
import Logo from '../../assets/logoDraft-removebg-preview.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary border" style={{ backgroundColor: 'gray', boxShadow:' rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
        <div className="container">
          <a href="/" className="navbar">
            <img src={Logo} alt='Agilitnet Logo' style={{height:'50px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/'>
                <a  className="nav-link active mx-2" style={{marginRight:'45px'}} aria-current="page">Home</a></Link>
              </li>

              
              <li className="nav-item">
              <Link to='/about'>
                <a  className="nav-link active mx-2">About Us</a></Link>
              </li>

              <li className="nav-item">
             <Link to='/capabilities'> 
                <a className="nav-link active mx-2">Capabilities</a></Link>
              </li>
            </ul>

              <Link to='/contact'>
            <a style={{color:'white', textDecoration:'none'}}>
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
                Contact Us
                </button>
                </a>
                </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
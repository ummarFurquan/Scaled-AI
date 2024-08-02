import React from 'react'
import Logo from '../../assets/Logo-final-bg.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary border" style={{ backgroundColor: 'gray', boxShadow: ' rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' }}>
        <div className="container">
          <a  href="/" className="navbar">
            <img src={Logo} alt='Agilitnet Logo' style={{ height:'60px', width:'100px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to='/'
                  className={({ isActive }) => 
                    isActive ? "nav-link active mx-2 active-link" : "nav-link active mx-2"
                  }
                  style={{ marginRight: '45px' }}
                  end
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to='/about'
                  className={({ isActive }) => 
                    isActive ? "nav-link active mx-2 active-link" : "nav-link active mx-2"
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to='/capabilities'
                  className={({ isActive }) => 
                    isActive ? "nav-link active mx-2 active-link" : "nav-link active mx-2"
                  }
                >
                  Capabilities
                </NavLink>
              </li>
            </ul>

            <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>
              <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
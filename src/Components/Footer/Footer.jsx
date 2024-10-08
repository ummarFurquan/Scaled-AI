import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo-final-bg.png'
import { Link } from 'react-router-dom'

const Footer = () => {

	const date = new Date().getFullYear()
	return (

		<>
			<footer className="deneb_footer footer navbarfixed-bottom" style={{marginTop:'30px'}} >
				<div className="widget_wrapper" style={{ backgroundColor: '#D3D3D3', display:'flex', justifyContent:'space-around' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12" style={{}}>
								<div className="widget widegt_about" >
									<div className="widget_title" style={{marginLeft:'-10px'}}>
										<img src={Logo} style={{ width: '190px' }} className="img-fluid" alt="" />
									</div>
									<p>At ScaledAI, our mission is to deliver cutting-edge technology that empowers customers to serve society, drive positive change, and enhance quality of life. We pioneer transformative digital solutions to enable optimal efficiency, security, and innovation for global development.</p>
									<ul style={{padding:'0px'}}>
										<li><span style={{fontWeight:'bold'}}>CAGE Code</span>: 9YVL4</li>
										<li><span style={{fontWeight:'bold'}}>UEI</span>: QWC2BFE27RD6
										</li>
									</ul>
									<ul className="social" style={{marginLeft:'-25px'}}>
										<li><a href="https://www.linkedin.com/company/104761353" rel="noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="widget widget_link" style={{marginLeft:'90px'}}>
									<div className="widget_title" style={{marginLeft:'30px'}}>
										<h4 style={{marginTop:'30px'}}>Links</h4>
									</div>
									<ul>
										<li><Link to='/about'>About Us</Link></li>
										<li><Link to='/capabilities'>Capabilities</Link></li>
										<li><Link to='/contact'>Contact</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="widget widget_contact"style={{marginLeft:'40px'}}>
									<div className="widget_title" >
										<h4 style={{marginTop:'25px'}}>Contact Us</h4>
									</div>
									<div className="contact_info">
										<div className="single_info">
											<div className="footer-icons">
												<i className="fas fa-phone-alt"></i>
											</div>
											<div className="info">
												<p><a href="tel:646-240-3641">571-277-5901</a></p>
											</div>
										</div>
										<div className="single_info">
											<div className="footer-icons">
												<i className="fas fa-envelope"></i>
											</div>
											<div className="info">
												<p><a href="mailto:info@scaledai.com">info@scaledai.com</a></p>
											</div>
										</div>
										<div className="single_info">
											<div className="footer-icons">
												<i className="fas fa-map-marker-alt"></i>
											</div>
											<div className="info">
												<a href='http://tiny.cc/z18jzz' style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noreferrer'>
													<p>722 E Market St, <span>STE 102 OFC A69,</span> Leesburg VA 20176</p>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright_area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="copyright_text">
									<p>Copyright &copy; {date} All rights reserved.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer

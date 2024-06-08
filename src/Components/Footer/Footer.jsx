import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.jpg'

const Footer = () => {
  return (

    <>
<footer className="deneb_footer footer navbarfixed-bottom" >
	<div className="widget_wrapper" style={{backgroundColor:'#818589'}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="widget widegt_about">
						<div className="widget_title">
							<img src={Logo} style={{width:'200px', mixBlendMode:'color-burn'}} className="img-fluid" alt=""/>
						</div>
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						<ul className="social">
							<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="/"><i className="fab fa-twitter"></i></a></li>
							<li><a href="/"><i className="fab fa-instagram"></i></a></li>
							<li><a href="/"><i className="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="widget widget_link">
						<div className="widget_title">
							<h4>Links</h4>
						</div>
						<ul>
							<li><a href='/about'>About Us</a></li>
							<li><a href='/approach'>Our Approach</a></li>
							<li><a href='/services'>Serivces</a></li>
							<li><a href='/capabilites'>Capabilities</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="widget widget_contact">
						<div className="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div className="contact_info">
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-phone-alt"></i>
								</div>
								<div className="info">
									<p><a href="tel:+919246147999">1800-121-3637</a></p>
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-envelope"></i>
								</div>
								<div className="info">
									<p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-map-marker-alt"></i>
								</div>
								<div className="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
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
						<p>Copyright &copy; 2020 All rights reserved.</p>
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

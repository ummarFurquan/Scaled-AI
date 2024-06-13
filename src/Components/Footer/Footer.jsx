import React from 'react'
import './Footer.css'
import Logo from '../../assets/AGILITNET_Final_Logo.png'

const Footer = () => {

	const date = new Date().getFullYear()
  return (

    <>
<footer className="deneb_footer footer navbarfixed-bottom" >
	<div className="widget_wrapper" style={{backgroundColor:'#e5e5e5'}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="widget widegt_about">
						<div className="widget_title">
							<img src={Logo} style={{width:'250px'}} className="img-fluid" alt=""/>
						</div>
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						<ul className="social">
							<li><a href="https://www.linkedin.com/company/agilitnet/" rel="noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a></li>
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
									<p><a href="tel:646-240-3641">646-240-3641</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-envelope"></i>
								</div>
								<div className="info">
									<p><a href="mailto:jay.natarajan@agilitnet.com">jay.natarajan@agilitnet.com</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-map-marker-alt"></i>
								</div>
								<div className="info">
									<a href='https://tinyurl.com/5d7a99mt' style={{textDecoration:'none', color:'black'}} target='_blank' rel='noreferrer'>
									<p>20029 Presidents Cup TE,<span>Ashburn VA-20147.</span></p>
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

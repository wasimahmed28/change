import React from 'react'

const footer = () => {
  return (
    <footer id="footer">
			<div class="container">
				<div class="row">
					<div class="column-lg-3 column-6">
						<div class="footer-widget">
							<p><img src="images/logo.png" class="img-fluid" alt="Logo" /></p>
							<p>Our motto to fulfill customer demand by making them satisfied with growing their business.</p>
						</div>
					</div>
					<div class="column-lg-3 column-6">
						<div class="footer-widget">
							<p class="footer-widget-heading">About</p>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Features</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
						</div>
					</div>
					<div class="column-lg-3 column-6">
						<div class="footer-widget">
							<p class="footer-widget-heading">Support</p>
							<ul>
								<li><a href="#">Account</a></li>
								<li><a href="#">Support Center</a></li>
								<li><a href="#">Feedback</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Accesbility</a></li>
							</ul>
						</div>
					</div>
					<div class="column-lg-3 column-6">
						<div class="footer-widget">
							<p class="footer-widget-heading">Get our app</p>
							<p><a href="#" alt="Google Play"><img src="images/google-play.png" alt="Google Play" /></a></p>
							<p><a href="#" alt="App Store"><img src="images/app-store.png" alt="App Store" /></a></p>
						</div>
					</div>
				</div>
				<div class="copyright">
					©Copyright Intellipaat 2023. All rights reserved.
				</div>
			</div>
		</footer>
  )
}

export default footer

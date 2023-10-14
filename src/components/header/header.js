import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header id="header">
      {<header id="header">
			<div class="container">
				<div class="header-wrapper">
					<div class="logo-wrapper">
						<img src="images/logo.png" class="img-fluid" alt="Logo" />
					</div>
					<nav id="navigation" class="">
						<label for="check" class="checkbtn">
							<span>☰</span>
						</label>
						<ul>
							<span class="mobile-menu-close">×</span>
							<li><a href="#home" title="Home">Home</a></li>
							<li><a href="#profile" title="Profile">Profile</a></li>
							<li class="dropdown"><a href="#courses" title="Courses">Courses <span class="arrow-down"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#courses-1" title="Courses-1">Courses-1</a></li>
									<li><a href="#courses-2" title="Courses-2">Courses-2</a></li>
								</ul>
							</li>
							<li><a href="#contact" title="Contact">Contact</a></li>
						</ul>
					</nav>
					<div class="login-wrapper">
						<a href="#signIn" class="signin" title="Courses-1">Sign In</a>
						<a href="javascript:void(0);" id="myBtn" class="signup" title="Courses-1">Sign Up</a>
					</div>
				</div>
			</div>
		</header>}
    </header>
  );
};

export default Header;
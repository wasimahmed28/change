import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src="images/logo.png" className="img-fluid" alt="Logo" />
          </div>
          <nav id="navigation" className={isOpen ? 'open' : ''}>
            <label htmlFor="check" className="checkbtn" onClick={handleMenuToggle}>
              <span>☰</span>
            </label>
            <ul>
              <span className="mobile-menu-close" onClick={handleMenuToggle}>×</span>
              <li><a href="#home" title="Home">Home</a></li>
              <li><a href="#profile" title="Profile">Profile</a></li>
              <li className="dropdown">
                <a href="#courses" title="Courses">Courses <span className="arrow-down"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#courses-1" title="Courses-1">Courses-1</a></li>
                  <li><a href="#courses-2" title="Courses-2">Courses-2</a></li>
                </ul>
              </li>
              <li><a href="#contact" title="Contact">Contact</a></li>
            </ul>
          </nav>
          <div className="login-wrapper">
            <a href="#signIn" className="signin" title="Courses-1">Sign In</a>
            <button id="myBtn" className="signup" title="Courses-1">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './component.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      window.scrollBy({
        top: offset,
        behavior: 'smooth',
      });
      toggleNavbar();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo" onClick={() => scrollToSection('home')}>
          Choiyoungdok
        </h1>
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <span className="nav-link" onClick={() => scrollToSection('home')}>
              Home
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => scrollToSection('gallery')}>
              Project
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

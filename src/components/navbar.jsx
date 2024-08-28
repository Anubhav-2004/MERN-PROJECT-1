import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container nav_bar">
      <div className='left nav_items'>MY Portfolio</div>
      <div className='right'>
        <div className={`nav_links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#contacts" className="nav_items">Contact</a>
        </div>
        <button className="menu_toggle" onClick={toggleMenu}>
          <span className="menu_icon">&#9776;</span> {/* Hamburger icon */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

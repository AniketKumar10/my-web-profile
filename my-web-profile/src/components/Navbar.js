
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleClick('/')}>Home</Link>
        </li>
        <li className={`nav-item ${activeLink === '/about' ? 'active' : ''}`}>
          <Link to="/about" onClick={() => handleClick('/about')}>About</Link>
        </li>
        <li className={`nav-item ${activeLink === '/projects' ? 'active' : ''}`}>
          <Link to="/projects" onClick={() => handleClick('/projects')}>Projects</Link>
        </li>
        <li className={`nav-item ${activeLink === '/contact' ? 'active' : ''}`}>
          <Link to="/contact" onClick={() => handleClick('/contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

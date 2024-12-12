import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/certificate", label: "Certificate" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      {/* Mobile Menu Toggle */}
      <button
        className="navbar-toggle"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`nav-list ${isMobileMenuOpen ? "mobile-open" : ""}`}
        aria-label="Navigation Menu"
      >
        {navItems.map(({ path, label }) => (
          <li
            key={path}
            className={`nav-item ${location.pathname === path ? "active" : ""}`}
            role="menuitem"
          >
            <Link
              to={path}
              className="nav-link"
              aria-current={location.pathname === path ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import './Footer.css';

const Footer = () => {

  const [showFooter, setShowFooter] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) { 
        setShowFooter(true);
      } else {
        setShowFooter(
false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showFooter && (
      <footer className="footer"> {/* Add the CSS class */}
        <p>&copy; {new Date().getFullYear()} I, Aniket Kumar has all rights reserved.</p>
      </footer>
    )
  );
};
export default Footer;
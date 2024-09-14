import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter]
 = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showFooter && (
      <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '50%', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} I, Aniket Kumar has all rights reserved.</p>
      </footer>
    )
  );
};

export default Footer;

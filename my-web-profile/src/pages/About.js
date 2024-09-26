import React from 'react';
import Skills from '../components/Skills';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="skills-section">
        <Skills /> 
      </div>
      <div className="resume-section">
        <h2>My Resume</h2>
        {/* Use a PDF viewer library like react-pdf */}
        {/* Install: npm install react-pdf */}
        {/* <PDFViewer src="/resume.pdf" /> */}
        <object data="/Resume.pdf" type="application/pdf" width="100%" height="600px">
          <p>Alternative text - include a link to download the PDF, or a message indicating the PDF cannot be displayed.</p>
        </object>
        <a href="/Resume.pdf" download className="download-button">Download Full Resume</a>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import SkillsWordCloud from '../components/SkillWordCloud';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="skills-section">
        <SkillsWordCloud />
      </section>
      
      <section className="resume-certificates-row">
        <div className="certificates-section">
          <h2>Certificates</h2>
          <div className="certificates-grid">
            <div className="certificate-card">Certificate 1</div>
            <div className="certificate-card">Certificate 2</div>
            <div className="certificate-card">Certificate 3</div>
            <div className="certificate-card">Certificate 4</div>
          </div>
        </div>

        <div className="resume-section">
          <h2>My Resume</h2>
          <object 
            data="/Resume.pdf" 
            type="application/pdf" 
            className="resume-iframe"
          >
            <p>Unable to display PDF. <a href="/Resume.pdf" download>Download instead</a></p>
          </object>
          <a href="/Resume.pdf" download className="download-button">
            Download Full Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
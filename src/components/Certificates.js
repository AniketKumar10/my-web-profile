// Import images directly
import Certificate1 from '../assets/images/CybEss-Img.png';
import Certificate2 from '../assets/images/AWS_img.png';
// Certificates.js
import React from 'react';
import './Certificates.css';

const certificatesData = [
  {
    image: Certificate1,
    name: 'Cyber Security',
    description: 'Skills demonenstrating understanding about cybersecurity essentials ,rules and ethics'
  },
  {
    image: Certificate2,
    name: 'AWS Cloud Practitioner',
    description: 'Validated fundamental understanding of AWS cloud services and infrastructure.'
  },
  // Add more certifications as needed
];

function CertificateCard({ image, name, description }) {
  return (
    <div className="cert-card">
      <div className="cert-image-container">
        <img 
          src={image} 
          alt={name} 
          className="cert-image" 
        />
      </div>
      <div className="cert-name">
        {name}
      </div>
      <div className="cert-hover-overlay">
        <p className="cert-description">{description}</p>
      </div>
    </div>
  );
}

function Certificates() {
  return (
    <div className="cert-container">
      <div className="cert-grid">
        {certificatesData.map((cert, index) => (
          <CertificateCard 
            key={index}
            image={cert.image}
            name={cert.name}
            description={cert.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
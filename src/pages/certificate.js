import React from 'react';
import './certificate.css';

const Certificates = () => {
  // Sample data for certificates with PDF links
  const certificates = [
    {
      name: 'Python Programming',
      issueDate: '03.06.2024',
      issuerOrg: 'pythoninstitute.org',
      onlineLink: '/certificates/AniketKumar-PCAP-Programming-certificate.pdf', // Updated path
    },
    {
      name: 'Introduction to Business Analytics with R',
      issueDate: '20.11.2024',
      issuerOrg: 'Coursera',
      onlineLink: 'https://www.coursera.org/account/accomplishments/verify/1TJ8QOVLEWFG', // Update this to your actual PDF path
    },
    {
      name: 'CCNAv7: Enterprise Networking, Security, and Automation',
      issueDate: '03.06.2024',
      issuerOrg: 'Cisco netacad',
      onlineLink: '/certificates/AniketKumar-EnterpriseNetwo-certificate.pdf', // Update this to your actual PDF path
    },
    {
      name: 'Cybersecurity Essentials',
      issueDate: '03.06.2024',
      issuerOrg: 'Cisco netacad',
      onlineLink: '/certificates/AniketKumar-CybersecurityEs-certificate.pdf', // Update this to your actual PDF path
    },
    {
      name: 'Introduction to Cybersecurity',
      issueDate: '03.06.2024',
      issuerOrg: 'Cisco netacad',
      onlineLink: '/certificates/AniketKumar-IntroductionToCertificateCyberSec.pdf', // Update this to your actual PDF path
    },
    {
      name: 'CCNAv7: Introduction to Networks',
      issueDate: '03.06.2024',
      issuerOrg: 'Cisco netacad',
      onlineLink: '/certificates/AniketKumar-IntroductionToNetworkingCertificate.pdf', // Update this to your actual PDF path
    },
    {
      name: 'CCNAv7: Switching, Routing, and Wireless Essentials',
      issueDate: '03.06.2024',
      issuerOrg: 'Cisco netacad',
      onlineLink: '/certificates/AniketKumar-SwitchingRoutinCertificate.pdf', // Update this to your actual PDF path
    },
    {
      name: 'Machine Learning',
      issueDate: '01.08.2023',
      issuerOrg: 'Teachnook',
      onlineLink: '/certificates/TeachnookCOURSECompletionCertificateAniketKumar.pdf', // Update this to your actual PDF path
    },
    {
      name: 'Google Cloud Certified Professional Data Engineer',
      issueDate: '01.05.2024',
      issuerOrg: 'Udemy',
      onlineLink: 'https://www.udemy.com/certificate/UC-27a4b253-f2eb-48df-a2f3-86d9eaf1a589/', // Update this to your actual PDF path
    },
    {
      name: 'Introduction to Business Analytics: Communicating with Data',
      issueDate: '05.01.2021',
      issuerOrg: 'Coursera',
      onlineLink: 'https://www.coursera.org/account/accomplishments/verify/TUW9MT0754QN', // Update this to your actual PDF path
    },
    {
      name: 'Introduction to Cloud Computing on AWS for Beginners',
      issueDate: '01.04.2024',
      issuerOrg: 'Udemy',
      onlineLink: 'https://www.udemy.com/certificate/UC-0c55bd20-6874-4814-812f-efc16904c071/', // Update this to your actual PDF path
    },
    {
      name: 'AWS Academy Cloud Foundations',
      issueDate: '15.03.2024',
      issuerOrg: 'Creadly',
      onlineLink: 'https://www.credly.com/badges/49e9188c-936d-4749-a877-6ab08af1aa55/public_url', // Update this to your actual PDF path
    },
  ];

  return (
    <div className="certificates-container">
      <h1>My Certificates</h1>
      <table className="certificates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Issue Date</th>
            <th>Issuer Org</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate, index) => (
            <tr key={index}>
              <td>
                <a href={certificate.onlineLink} target="_blank" rel="noopener noreferrer">
                  {certificate.name}
                </a>
              </td>
              <td>{certificate.issueDate}</td>
              <td>{certificate.issuerOrg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Certificates;
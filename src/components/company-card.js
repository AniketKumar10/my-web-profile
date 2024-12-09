import React from 'react';
import styled from 'styled-components';
import GCPLogo from '../assets/GCP.svg'; // Use relative path from components folder
import python from '../assets/python.svg';
import aws from '../assets/aws.svg';
import nextjs from '../assets/nextjs.svg';
import nodejs from '../assets/nodejs.svg';
import bun from '../assets/bun.svg';


const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows items to wrap to the next line if necessary
  justify-content: center; // Center the items horizontally
  margin-top: 40px;
  padding: 0 20px; // Add padding to the container
`;

const CompanyLogo = styled.img`
  width: 80px; // Set a consistent width for all logos
  height: auto;
  margin: 40px; // Add margin between logos
  transition: transform 0.2s; // Smooth transition for hover effects

  &:hover {
    transform: scale(1.1); // Slightly enlarge logo on hover
  }
`;

const Companies = () => {
  const companies = [
    {
      name: "Google Cloud",
      logo: GCPLogo,
    },
    {
      name: "Python",
      logo: python,
    },
    {
      name: "AWS",
      logo: aws,
    },
    {
      name: "Next.js",
      logo: nextjs,
    },
    {
      name: "Node.js",
      logo: nodejs,
    },
    {
      name: "Bun",
      logo: bun,
    },
  ];

  return (
    <CompaniesContainer>
      {companies.map((company, index) => (
        <CompanyLogo key={index} src={company.logo} alt={company.name} />
      ))}
    </CompaniesContainer>
  );
};

export default Companies;
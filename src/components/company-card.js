import React from 'react';
import styled from 'styled-components';
import GCPLogo from '../assets/GCP.svg'; // Use relative path from components folder
import python from '../assets/python.svg';
import aws from '../assets/aws.svg';
import nextjs from '../assets/nextjs.svg';

const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
`;

const CompanyCard = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const CompanyName = styled.h3`
  margin-bottom: 5px;
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
      name: "nextjs",
      logo: nextjs,
    },
  ];

  return (
    <CompaniesContainer>
      {companies.map((company, index) => (
        <CompanyCard key={index}>
          <CompanyLogo src={company.logo} alt={company.name} />
        </CompanyCard>
      ))}
    </CompaniesContainer>
  );
};

export default Companies;
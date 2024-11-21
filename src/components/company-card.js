import React from 'react';
import styled from 'styled-components';

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
  border: 1px solid #eee;
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

const CompanyIndustry = styled.p`
  font-size: 14px;
  color: #666;
`;


const Companies = () => {
  const companies = [
    {
      name: "Hershey's",
      logo: "https://icons8.com/icon/WHRLQdbEXQ16/google-cloud",
      industry: "Consumer Packaged Goods",
    },
    {
      name: "P&G",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Procter_%26_Gamble_logo.svg/1200px-Procter_%26_Gamble_logo.svg.png",
      industry: "Consumer Packaged Goods",
    },
    {
      name: "Staples",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Staples_Logo.svg/1200px-Staples_Logo.svg.png",
      industry: "Industrial Manufacturing",
    },
    {
      name: "Duracell",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Duracell_logo.svg/1200px-Duracell_logo.svg.png",
      industry: "Wholesale Distribution",
    }
  ];

  return (
    <CompaniesContainer>
      {companies.map((company, index) => (
        <CompanyCard key={index}>
          <CompanyLogo src={company.logo} alt={company.name} />
          <CompanyName>{company.name}</CompanyName>
          <CompanyIndustry>{company.industry}</CompanyIndustry>
        </CompanyCard>
      ))}
    </CompaniesContainer>
  );
};

export default Companies;
import { useState } from "react";
import styled from "styled-components";

import Logo from "../imagesSvg/logo.svg";
import FeaturesList from "./featuresList";
import CompanyList from "./companyList";

const ALMOST_WHITE = "hsl(0, 0%, 98%)";
const MEDIUM_GREY = "hsl(0, 0%, 41%)";
const ALMOST_BLACK = `hsl(0, 0%, 8%)`;

const NavBarDiv = styled.div`
  height: 50px;
  border: solid red 1px;
`;

const SnapLogo = styled.img`
  margin: auto 20px;
  position: relative;
  top: 14px;
`;

const Button = styled.button`
  border: none;
  margin: 0 10px;
  background-color: ${ALMOST_WHITE};
  :hover {
    color: ${MEDIUM_GREY};
  }
`;
const ButtonRight = styled.button`
  width: 70px;
  margin: 10px;
  border: 1px solid ${ALMOST_WHITE};
  padding: 6px 0px;
  background-color: ${ALMOST_WHITE};
  float: right;
  :hover {
    border: ${ALMOST_BLACK} 1px solid;
    border-radius: 8px;
  }
`;

const FeatureListDiv = styled.div`
  position: absolute;
  left: 62px;
  background-color: white;
`;

const CompanyListDiv = styled.div`
  position: absolute;
  left: 220px;
  background-color: white;
`;

const NavBar = () => {
  const [featuresBtn, setFeaturesBtn] = useState(false);
  const [companyBtn, setCompanyBtn] = useState(false);

  const handleFeaturesClick = () => {
    setFeaturesBtn(featuresBtn === false ? true : false);
  };

  const handleCompanyClick = () => {
    setCompanyBtn(companyBtn === false ? true : false);
  };

  return (
    <>
      <NavBarDiv>
        <SnapLogo src={Logo} alt="Logo" />
        <Button onClick={handleFeaturesClick}>Features</Button>
        <Button onClick={handleCompanyClick}>Company</Button>
        <Button>Careers</Button>
        <Button>About</Button>
        <ButtonRight>Login</ButtonRight>
        <ButtonRight>Register</ButtonRight>
      </NavBarDiv>
      {featuresBtn && (
        <FeatureListDiv>
          <FeaturesList />
        </FeatureListDiv>
      )}
      {companyBtn && (
        <CompanyListDiv>
          <CompanyList />
        </CompanyListDiv>
      )}
    </>
  );
};

export default NavBar;

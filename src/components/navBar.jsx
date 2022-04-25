import styled from "styled-components";

import Logo from "../imagesSvg/logo.svg";
import FeaturesList from "./featuresList";

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
  margin-right: 20px;
  border: 1px solid ${ALMOST_WHITE};
  padding: 6px 0px;
  background-color: ${ALMOST_WHITE};
  position: relative;
  left: 760px;
  :hover {
    border: ${ALMOST_BLACK} 1px solid;
    border-radius: 8px;
  }
`;

const FeatureListDiv = styled.div`
position: absolute;
left: 62px;
background-color:white;
`

const NavBar = () => {
  return (
    <>
      <NavBarDiv>
        <SnapLogo src={Logo} alt="Logo" />
        <Button>Featuring</Button>
        <Button>Company</Button>
        <Button>Careers</Button>
        <Button>About</Button>
        <ButtonRight>Login</ButtonRight>
        <ButtonRight>Register</ButtonRight>
      </NavBarDiv>
      <FeatureListDiv>
        <FeaturesList />
      </FeatureListDiv>
    </>
  );
};

export default NavBar;

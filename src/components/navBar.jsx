import styled from "styled-components";

import Logo from "../imagesSvg/logo.svg";

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
  background-color: hsl(0, 0%, 98%);
`;
const ButtonRight = styled.button`
    width: 70px;
    margin-right: 20px;
  border: 1px solid hsl(0, 0%, 98%);
  padding: 6px 0px;
  background-color: hsl(0, 0%, 98%);
  position: relative;
  left: 760px;
  :hover {
    border: black 1px solid;
    border-radius: 8px;
  }
`;

const NavBar = () => {
  return (
    <NavBarDiv>
      <SnapLogo src={Logo} alt="Logo" />
      <Button>Featuring</Button>
      <Button>Company</Button>
      <Button>Careers</Button>
      <Button>About</Button>
      <ButtonRight>Login</ButtonRight>
      <ButtonRight>Register</ButtonRight>
    </NavBarDiv>
  );
};

export default NavBar;

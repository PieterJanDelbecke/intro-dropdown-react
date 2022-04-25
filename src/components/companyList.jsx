import styled from "styled-components";
import { Link } from "react-router-dom";

const MEDIUM_GREY = "hsl(0, 0%, 41%)";
const ALMOST_BLACK = `hsl(0, 0%, 8%)`;

const Containerz = styled.div`
  width: 150px;
  border: solid red 1px;
`;

const LinkDivz = styled.div`
  margin: 5px 15px;
`;

const StyledLinkz = styled(Link)`
  color: ${MEDIUM_GREY};
  text-decoration: none;
  margin: 5px 0px;
  font-weight: normal;
  :hover {
    color: ${ALMOST_BLACK};
  }
`;

const CompanyList = () => {
  return (
    <Containerz>
      <LinkDivz>
        <StyledLinkz to="/todolist">History</StyledLinkz>
      </LinkDivz>
      <LinkDivz>
        <StyledLinkz to="/todolist">Our Team</StyledLinkz>
      </LinkDivz>
      <LinkDivz>
        <StyledLinkz to="/todolist">Blog</StyledLinkz>
      </LinkDivz>
    </Containerz>
  );
};

export default CompanyList;

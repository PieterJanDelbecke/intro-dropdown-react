import { Link } from "react-router-dom";
import styled from "styled-components";

import ToDoIcon from "../imagesSvg/icon-todo.svg";
import CalendarIcon from "../imagesSvg/icon-calendar.svg";
import RemindersIcon from "../imagesSvg/icon-reminders.svg";
import PlanningIcon from "../imagesSvg/icon-planning.svg";

const MEDIUM_GREY = "hsl(0, 0%, 41%)";
const ALMOST_BLACK = `hsl(0, 0%, 8%)`;

const FeaturesDiv = styled.div`
  width: 150px;
  border: solid red 1px;
`;

const LinkDiv = styled.div`
  margin: 5px 15px;
`;

const Img = styled.img`
width: 15px;
height: 16px;
    margin: 0px 5px;
`
const StyledLink = styled(Link)`
  color: ${MEDIUM_GREY};
  text-decoration: none;
  margin: 5px 0px;
  font-weight: normal;
  :hover {
    color: ${ALMOST_BLACK};
  }
`;
const FeaturesList = () => {
  return (
    <FeaturesDiv>
      <LinkDiv>
        <Img src={ToDoIcon} alt="to do" />
        <StyledLink to="/todolist"> ToDo List</StyledLink>
      </LinkDiv>
      <LinkDiv>
        <Img src={CalendarIcon} alt="calendar" />
        <StyledLink to="/todolist"> Calendar</StyledLink>
      </LinkDiv>
      <LinkDiv>
      <Img src={RemindersIcon} alt="reminder" />
        <StyledLink to="/todolist"> Reminder</StyledLink>
      </LinkDiv>
      <LinkDiv>
        <Img src={PlanningIcon} alt="planning" />
        <StyledLink to="/todolist"> Planning</StyledLink>
      </LinkDiv>
    </FeaturesDiv>
  );
};

export default FeaturesList;

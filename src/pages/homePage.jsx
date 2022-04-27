import styled from "styled-components";

import NavBar from "../components/navBar";
import imageDesktop from "../imagesSvg/image-hero-desktop.png";
import databizImg from "../imagesSvg/client-databiz.svg";
import audiophileImg from "../imagesSvg/client-audiophile.svg";
import meetImg from "../imagesSvg/client-meet.svg";
import makerImg from "../imagesSvg/client-maker.svg";

const ALMOST_WHITE = "hsl(0, 0%, 98%)";
const ALMOST_BLACK = "hsl(0, 0%, 8%)";

const MainDiv = styled.div`
  margin: 0px auto;
  border: solid green 1px;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;
const TextDiv = styled.div`
  width: 500px;
  border: red 1px solid;
  display: block;
`;
const ImgDiv = styled.div`
  border: orange solid 1px;
  display: block;
`;

const Img = styled.img`
  margin: 20px auto 0px;
  width: 500px;
`;

const Button = styled.button`
    margin: 80px 0 0;
  display: block;
  width: 120px;
  background-color: ${ALMOST_BLACK};
  color: ${ALMOST_WHITE};
  border: ${ALMOST_BLACK} 1px solid;
  border-radius: 8px;
  padding: 8px 0px;
  border: 1ps solid ${ALMOST_WHITE};
  :hover {
      color: ${ALMOST_BLACK};
      background-color: ${ALMOST_WHITE};
    }
  }
`;

const TitleTop = styled.h1`
  margin: 150px 0 0;
  font-size: 60px;
`;
const TitleBottom = styled.h1`
  font-size: 60px;
  margin: 0;
`;

const Text = styled.p`
  margin: 70px 0 0;
  width: 85%;
  color: hsl(0, 0%, 41%);
`;

const LogoSmlDiv = styled.div`
margin: 135px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid yellow;
`;
const LogoDiv = styled.div``;
const LogoSml = styled.img`
  border: solid red 1px;
  display: inline-block;
`;

const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainDiv>
        <TextDiv>
          <TitleTop>Make</TitleTop>
          <TitleBottom>remote work</TitleBottom>
          <Text>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Text>
          <Button>Learn More</Button>
          <LogoSmlDiv>
            <LogoDiv>
              <LogoSml src={databizImg} alt="databix" />
            </LogoDiv>
            <LogoDiv>
              <LogoSml src={audiophileImg} alt="audiophile" />
            </LogoDiv>
            <LogoDiv>
              <LogoSml src={meetImg} alt="meet" />
            </LogoDiv>
            <LogoDiv>
              <LogoSml src={makerImg} alt="maker" />
            </LogoDiv>
          </LogoSmlDiv>
        </TextDiv>
        <ImgDiv>
          <Img src={imageDesktop} alt="desktop" />
        </ImgDiv>
      </MainDiv>
    </>
  );
};

export default HomePage;

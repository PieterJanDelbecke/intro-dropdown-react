import styled from "styled-components";

import NavBar from "../components/navBar";
import imageDesktop from "../imagesSvg/image-hero-desktop.png";
import databizImg from "../imagesSvg/client-databiz.svg";
import audiophileImg from "../imagesSvg/client-audiophile.svg";
import meetImg from "../imagesSvg/client-meet.svg";
import makerImg from "../imagesSvg/client-maker.svg";

const MainDiv = styled.div`
margin: 0px auto;
  border: solid green 1px;
  width: 85%;
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
    display: block;
`
const TitleTop = styled.h1`
    margin: 120px 0px 0px;
    font-size: 40px;
`
const TitleBottom = styled.h1`
    font-size: 40px;
    margin: 0px;
`
const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainDiv>
        <TextDiv>
          <TitleTop>Make</TitleTop>
          <TitleBottom>remote work</TitleBottom>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create tean rituals, and watch productivity.
          </p>
          <Button>Learn More</Button>
          <img src={databizImg} alt="databix" />
          <img src={audiophileImg} alt="audiophile" />
          <img src={meetImg} alt="meet" />
          <img src={makerImg} alt="maker" />
        </TextDiv>
        <ImgDiv>
          <Img src={imageDesktop} alt="desktop" />
        </ImgDiv>
      </MainDiv>
    </>
  );
};

export default HomePage;

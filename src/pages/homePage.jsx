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
`;
const TextDiv = styled.div`
width: 420px;
height: 560px;
  border: red 1px solid;
  display: inline-block;
`;
const ImgDiv = styled.div`
  border: orange solid 1px;
  width: 500px;
  display: inline-block;
`;

const Img = styled.img`
  margin: 20px auto 0px;
  width: 420px;
`;

const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainDiv>
        <TextDiv>
          <h1>Make remote work home</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create tean rituals, and watch productivity.
          </p>
          <button>Learn More</button>
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

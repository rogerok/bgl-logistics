import React from "react";
import MainGrid from "../../components/main-grid/MainGrid";
import {
  Inner,
  Underlay,
  Background,
  MainPage,
  MainPageHeader,
  HeadersWrapper,
  SubHeader,
  Overlay,
  Links,
  TrackLink,
  SendLink,
} from "./Main.style";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import backgroundImage from "../../assets/img/main-bg.jpg";

const Main = () => {
  return (
    <>
      <MainGrid>
        <Underlay>
          <Overlay>
            <HeadersWrapper>
              <MainPageHeader>
                WELCOME TO <br />
                BLG LOGISTICS
              </MainPageHeader>
              <SubHeader>
                Your seaport and logistics service provider
                <br /> with an international network
              </SubHeader>
            </HeadersWrapper>

            <Links>
              <TrackLink to="/">
                Send cargo
                <ArrowDownwardIcon
                  sx={{
                    position: "relative",
                    transform: "rotate(-45deg)",
                    top: "2px",
                    left: "10px",
                    fontSize: "20px",
                  }}
                />
              </TrackLink>
              <SendLink to="/">
                tracking
                <ArrowDownwardIcon
                  sx={{
                    position: "relative",
                    transform: "rotate(-45deg)",
                    top: "2px",
                    left: "10px",
                    fontSize: "20px",
                  }}
                />
              </SendLink>
            </Links>
          </Overlay>
          <Background>
            <img src={backgroundImage} alt="" />
          </Background>
        </Underlay>
      </MainGrid>
    </>
  );
};

export default Main;

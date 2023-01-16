import React from "react";
import styled from "styled-components";
import { device } from "../Device";

const Home = () => {
  return (
    <HomePageWrapper>
      <HomePageHeader>
        {/* <img src="/images/Nav/Logo.png" alt="Logo" /> */}
        hii
      </HomePageHeader>
    </HomePageWrapper>
  );
};

export default Home;

const HomePageWrapper = styled.div`
  // 미디어 쿼리 예시
  background-color: black;

  @media ${device.mobile} {
    background-color: red;
  }

  @media ${device.tablet} {
    background-color: yellow;
  }

  @media ${device.pc} {
    background-color: blue;
  }
`;

const HomePageHeader = styled.div``;

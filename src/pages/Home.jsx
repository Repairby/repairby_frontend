import React from "react";
import styled from "styled-components";
import { device } from "../Device";

const Home = () => {
  return (
    <HomePageWrapper>
      <HomePageHeader>
        <img src="/images/Nav/Logo.png" alt="Logo" />
        <MenuBox>
          <Menu>회사소개</Menu>
          <Menu>고객센터</Menu>
          <Menu>내 견적 조회</Menu>
          <MainMenu>무료 견적 받기</MainMenu>
        </MenuBox>
      </HomePageHeader>
      <HomepageBody></HomepageBody>
    </HomePageWrapper>
  );
};

export default Home;

const HomePageWrapper = styled.div``;

// 홈페이지 헤더 부분
const HomePageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 60px;
  margin: 12px auto;

  @media all and (max-width: 1100px) {
    width: 90%;
  }

  img {
    width: 155px;
    height: 60px;
    margin-left: 2%;
  }
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2%;
`;

const Menu = styled.a`
  font-size: 16px;
  margin-right: 30px;
  cursor: pointer;
`;

const MainMenu = styled.a`
  font-size: 16px;
  border: 1px solid black;
  padding: 13px;
  border-radius: 40px;
  cursor: pointer;
`;

// 홈페이지 바디 부분

const HomepageBody = styled.div``;

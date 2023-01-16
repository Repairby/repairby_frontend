import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../Device";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  const [menu, setmenu] = useState(false);

  return (
    <HomePageWrapper>
      <HomePageHeader>
        <img src="/images/Nav/Logo.png" alt="Logo" />
        <MenuBox menu={menu}>
          <Menu>회사소개</Menu>
          <Menu>고객센터</Menu>
          <Menu>내 견적 조회</Menu>
          <MainMenu>무료 견적 받기</MainMenu>
        </MenuBox>
        <Menubar
          onClick={() => {
            setmenu(!menu);
          }}
        >
          <IoIosMenu className="IoMenu" />
        </Menubar>
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
  position: relative;
  margin: 12px auto;

  img {
    width: 155px;
    height: 60px;
    margin-left: 2%;
  }

  @media all and (max-width: 1100px) {
    width: 90%;
  }

  @media ${device.mobile} {
    display: none;
    display: block;
  }
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2%;

  @media ${device.mobile} {
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-center;
    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
  }
`;

const Menu = styled.a`
  font-size: 16px;
  margin-right: 30px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%;
    font-size: 16px;
    padding: 15px 0;
    margin-right: 0;
    cursor: pointer;
    text-align: center;

    :hover {
      background-color: #bcbcbc;
    }
  }
`;

const MainMenu = styled.a`
  font-size: 16px;
  border: 1px solid black;
  padding: 13px;
  border-radius: 40px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%;
    text-align: center;
    border: none;
    border-radius: 0px;
    padding: 15px 0;
    font-size: 16px;
    cursor: pointer;

    :hover {
      background-color: #bcbcbc;
    }
  }
`;

const Menubar = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 15px;
  cursor: pointer;

  .IoMenu {
    font-size: 30px;
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;

// 홈페이지 바디 부분

const HomepageBody = styled.div``;

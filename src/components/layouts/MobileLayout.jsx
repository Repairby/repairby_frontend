import React from "react";
import styled from "styled-components";

const MobileLayout = ({ children, title = "" }) => {
  const hasTitle = title !== "";

  return (
    <MobileWrapper>
      <MobileContainer>
        {hasTitle && <MainTitle>{title}</MainTitle>}
        {children}
      </MobileContainer>
    </MobileWrapper>
  );
};

export default MobileLayout;

const MobileWrapper = styled.div`
  background-color: white;
`;

const MobileContainer = styled.div`
  position: relative;
  width: 376px;
  height: 100vh;
  max-height: auto;
  margin: 0 auto;
  background-color: white;

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const MainTitle = styled.div`
  text-align: start;
  font-size: 30px;
  font-weight: bold;
  margin-left: 12%;
  padding-top: 40px;
  margin-bottom: 15px;
  line-height: 38px;
`;

const EstimateBoxWrapper = styled.div`
  display: flex;
  justify-content: ${({ index }) => {
    return index === 0 ? "end" : index === 1 ? "start" : "center";
  }};
  padding: 10px 5%;
`;

const EstimateBox = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 15px 3px #f0f0f0;
  width: 260px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const DetailBox = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 7%;
  width: 100%;
  height: 55px;
`;

const UserIconBox = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: gray;
`;

const LoginUserImg = styled.img`
  width: ${({ index }) => {
    return index === 2 ? "40px" : "45px";
  }};
  height: 45px;
  background-color: ${({ index }) => {
    return index === 0 ? "#fefced" : index === 1 ? "#E3FDFE" : "#FFF2F2";
  }};
  border-radius: 50px;
  padding: 10px;
`;

const DetailDescription = styled.div`
  width: 80%;
  text-align: end;
`;

const DetailTitle = styled.div`
  font-size: 0.9rem;
  margin-top: 7px;
  margin-bottom: 8px;
  color: #4d4d4d;
`;

const EstimatePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const LoginDescription = styled.div`
  font-size: 0.8rem;
  color: #989898;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const KakaoLoginButton = styled.a`
  margin: 18px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  border-radius: 12px;
  width: 80%;
  height: 55px;
  font-size: 18px;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;

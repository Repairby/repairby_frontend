import React, { useState } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";

const EstimageRequest = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  const menuClick = num => {
    if (num === 1) {
      setMenu1(true);
      setMenu2(false);
    } else if (num === 2) {
      setMenu1(false);
      setMenu2(true);
    } else {
    }
  };

  return (
    <EstimageRequestWrapper>
      <Container>
        <EachHeader title="견적 요청" />
        <PercentBar />
        <Percent>10%</Percent>
        <Question>어떤 서비스가 필요하세요?</Question>
        <AnswerBoxWrapper>
          <AnswerBox1 menu1={menu1} onClick={() => menuClick(1)}>
            🛠 &nbsp; 내 기기 수리하기
            <Described1 menu1={menu1}>
              Repairby 파트너스 수리점들로부터 수리 가격비교를
              <br />
              최대 7개까지 받아보세요.
              <br />
              가격, 평점, 후기, 위치 등을 확인 후 <br />
              Repairby를 통해 수리 예약을 해 주세요.
            </Described1>
          </AnswerBox1>
          <AnswerBox2 menu2={menu2} onClick={() => menuClick(2)}>
            💰 &nbsp; 내 기기 시세 조회
            <Described2 menu2={menu2}>
              내 기기 예상 매입가 7개를
              <br />
              실시간으로 받아보세요.
              <br />
              최고 매입가를 제시한 업체에게 <br />
              Repairby를 통해 판매할 수도 있어요.
            </Described2>
          </AnswerBox2>
          <AnswerBox>📱 &nbsp; 리퍼기기 구매하기</AnswerBox>
          <AnswerBox>💻 &nbsp; 리퍼기기 렌탈하기</AnswerBox>
        </AnswerBoxWrapper>
        <AgreeBox>동의하고 진행하기</AgreeBox>
      </Container>
    </EstimageRequestWrapper>
  );
};

export default EstimageRequest;

const EstimageRequestWrapper = styled.div`
  background-color: #eff0f2;
`;

const Container = styled.div`
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

const PercentBar = styled.div`
  width: 10%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 30px;
  margin-top: 10px;
  font-size: 12px;
`;

const Question = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 14px;
`;

const AnswerBoxWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const AnswerBox = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 8px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 73px;
  margin: 25px auto;
  cursor: pointer;
`;

const AnswerBox1 = styled.div`
  border: ${({ menu1 }) => {
    return menu1 === false ? "1px solid #b2b2b2" : "2px solid black";
  }};
  border-radius: 8px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: ${({ menu1 }) => {
    return menu1 === false ? "73px" : "165px";
  }};
  margin: 25px auto;
  cursor: pointer;
`;

const AnswerBox2 = styled.div`
  border: ${({ menu2 }) => {
    return menu2 === false ? "1px solid #b2b2b2" : "2px solid black";
  }};
  border-radius: 8px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: ${({ menu2 }) => {
    return menu2 === false ? "73px" : "165px";
  }};
  margin: 25px auto;
  cursor: pointer;
`;

const Described1 = styled.div`
  display: ${({ menu1 }) => {
    return menu1 === false ? "none" : "flex";
  }};
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  line-height: 15px;
  font-weight: normal;
`;

const Described2 = styled.div`
  display: ${({ menu2 }) => {
    return menu2 === false ? "none" : "flex";
  }};
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  line-height: 15px;
  font-weight: normal;
`;

const AgreeBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 57px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

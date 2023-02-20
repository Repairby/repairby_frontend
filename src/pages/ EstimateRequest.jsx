import React, { useState } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import { useNavigate } from "react-router-dom";

const EstimageRequest = () => {
  const [clickedMenu, setClickedMenu] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onClickMenu = type => {
    if (type === "undefined") return alert("운영중인 서비스가 아닙니다");
    setClickedMenu(type);
  };

  const onClickNext = () => {
    //FIX:if 중첩 제거
    if (clickedMenu === "내기기수리" && token === null) {
      if (token === null) {
        return navigate("/user_login/");
      }
      navigate("/request/");
    } else if (clickedMenu === "시세조회") {
      alert("이 서비스는 현재 운영중이 아닙니다");
    } else {
      alert("서비스를 선택하세요");
    }
  };

  return (
    <EstimageRequestWrapper>
      <Container>
        <EachHeader title="견적 요청" link="/" />
        <PercentBar />
        <Percent>10%</Percent>
        <Question>어떤 서비스가 필요하세요?</Question>
        <AnswerBoxWrapper>
          <AnswerBox1
            clickedMenu={clickedMenu}
            onClick={() => onClickMenu("내기기수리")}
          >
            🛠 &nbsp; 내 기기 수리하기
            <Described1 clickedMenu={clickedMenu}>
              Repairby 파트너스 수리점들로부터 수리 가격비교를
              <br />
              최대 7개까지 받아보세요.
              <br />
              가격, 평점, 후기, 위치 등을 확인 후 <br />
              Repairby를 통해 수리 예약을 해 주세요.
            </Described1>
          </AnswerBox1>
          <AnswerBox2
            clickedMenu={clickedMenu}
            onClick={() => onClickMenu("시세조회")}
          >
            💰 &nbsp; 내 기기 시세 조회
            <Described2 clickedMenu={clickedMenu}>
              내 기기 예상 매입가 7개를
              <br />
              실시간으로 받아보세요.
              <br />
              최고 매입가를 제시한 업체에게 <br />
              Repairby를 통해 판매할 수도 있어요.
            </Described2>
          </AnswerBox2>
          <AnswerBox onClick={() => onClickMenu("undefined")}>
            📱 &nbsp; 리퍼기기 구매하기
          </AnswerBox>
          <AnswerBox onClick={() => onClickMenu("undefined")}>
            💻 &nbsp; 리퍼기기 렌탈하기
          </AnswerBox>
        </AnswerBoxWrapper>
        <AgreeBox onClick={onClickNext}>동의하고 진행하기</AgreeBox>
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
  padding-left: 10%;
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
  //FIX: clickedMenu 로변경!
  border: ${({ clickedMenu }) => {
    return clickedMenu === "시세조회" ? "1px solid #b2b2b2" : "2px solid black";
  }};
  border-radius: 8px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  //FIX: clickedMenu 로변경!
  height: ${({ menu1 }) => {
    return menu1 === false ? "73px" : "165px";
  }};
  margin: 25px auto;
  cursor: pointer;
`;

const AnswerBox2 = styled.div`
  //FIX: clickedMenu 로변경!
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
  //FIX: clickedMenu 로변경!
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
  //FIX: clickedMenu 로변경!
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

import React, { useState } from "react";
import styled from "styled-components";

const RepairList = [
  "액정 및 터치 문제",
  "스피커 등 음향 문제",
  ["하우징 파손", <br />, "(뒷판, 외관 케이스)"],
  "버튼 불량",
  "카메라/후레쉬 문제",
  ["각종 잭 불량", <br />, "(충전, 아이폰)"],
  "Wifi / 블루투스 / GPS 불량",
  ["메인보드", <br />, "(전원이 켜지지 않음)"],
  ["각종 센서 불량", <br />, "(홍채, Face ID)"],
  "배터리 교체",
  "진동 문제",
  "리퍼",
];

const MainPhoneRepairChoice = ({ setProcessCount, setClickNumber }) => {
  const [ectClick, setEctClick] = useState(false);
  const [questClick, setQuestClick] = useState(-1);

  return (
    <>
      <MoblieScroll>
        <PercentBar />
        <Percent>50%</Percent>
        <Question>
          어떤 항목을 수리하길
          <br /> 원하시나요?
        </Question>
        <QuestBoxWrapper>
          {RepairList.map((quest, index) => (
            <QuestBox
              key={index}
              id={index}
              onClick={() => {
                setQuestClick(index);
                setEctClick(false);
                setProcessCount(2);
                setClickNumber(index);
              }}
              questClick={questClick}
            >
              {quest}
            </QuestBox>
          ))}
          <EctBox
            onClick={() => {
              setEctClick(!ectClick);
              setQuestClick(-1);
            }}
            ectClick={ectClick}
          >
            <EctSpan>기타</EctSpan>
            <Described ectClick={ectClick}>
              파손 정보를 직접 입력해주세요
            </Described>
            <EctInput
              ectClick={ectClick}
              onClick={e => {
                e.stopPropagation();
              }}
            />
          </EctBox>
        </QuestBoxWrapper>
      </MoblieScroll>
      <NextBox ectClick={ectClick} questClick={questClick}>
        다음
      </NextBox>
    </>
  );
};

export default MainPhoneRepairChoice;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PercentBar = styled.div`
  width: 50%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 48%;
  margin-top: 10px;
  font-size: 12px;
`;

const Question = styled.div`
  text-align: start;
  font-size: 27px;
  font-weight: bold;
  margin-top: 14px;
  margin-left: 40px;
  margin-bottom: 15px;
  line-height: 38px;
`;

const QuestBoxWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
`;

const QuestBox = styled.a`
  border: ${({ id, questClick }) => {
    return id === questClick ? "1.5px solid black" : "1px solid #c9c9c9";
  }};
  border-radius: 10px;
  white-space: pre-line;
  width: 47%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  font-weight: ${({ id, questClick }) => {
    return id === questClick ? "bold" : "normal";
  }};
`;

const EctBox = styled.div`
  border: ${({ ectClick }) => {
    return ectClick === false ? "1px solid #c9c9c9" : "1.5px solid black";
  }};
  border-radius: 10px;
  width: 95%;
  height: ${({ ectClick }) => {
    return ectClick === false ? "55px" : "150px";
  }};
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  margin-bottom: 100px;
  font-size: 14px;
  font-weight: ${({ ectClick }) => {
    return ectClick === false ? "normal" : "bold";
  }};
`;

const EctSpan = styled.span`
  display: block;
  margin: 20px 0;
`;

const Described = styled.div`
  display: ${({ ectClick }) => {
    return ectClick === false ? "none" : "flex";
  }};
  justify-content: center;
  color: gray;
  font-size: 13px;
`;

const EctInput = styled.input`
  display: ${({ ectClick }) => {
    return ectClick === false ? "none" : "block";
  }};
  margin: 0 auto;
  margin-top: 22px;
  width: 85%;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 8px;
`;

const NextBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: ${({ ectClick, questClick }) => {
    return ectClick === true || questClick > -1 ? "black" : "#C9C9C9";
  }};
  color: white;
`;

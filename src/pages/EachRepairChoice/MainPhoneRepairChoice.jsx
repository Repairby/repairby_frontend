import React, { useState } from "react";
import styled from "styled-components";

const RepairList = [
  "액정 및 터치 문제",
  "스피커 등 음향 문제",
  ["하우징 파손", <br key={1} />, "(뒷판, 외관 케이스)"],
  "버튼 불량",
  "카메라/후레쉬 문제",
  ["각종 잭 불량", <br key={1} />, "(충전, 아이폰)"],
  "Wifi / 블루투스 / GPS 불량",
  ["메인보드", <br key={1} />, "(전원이 켜지지 않음)"],
  ["각종 센서 불량", <br key={1} />, "(홍채, Face ID)"],
  "배터리 교체",
  "진동 문제",
  "리퍼",
];

const MainPhoneRepairChoice = ({
  setProcessCount,
  setClickNumber,
  clickNumber,
  setListClickNumber,
  setUnderListClickNumber19,
}) => {
  // 기타 버튼 선택지 boolean
  const [ectClick, setEctClick] = useState(false);
  // 기타를 제외한 나머지 선택지 number
  const [questClick, setQuestClick] = useState(-1);

  const questBoxClick = () => {
    if (ectClick === true || questClick > -1 || clickNumber > -1) {
      return setProcessCount(2);
    } else {
      return alert("수리 항목을 선택해주세요.");
    }
  };

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
                setListClickNumber(-1);
                setUnderListClickNumber19(-1);
              }}
              questClick={questClick}
              clickNumber={clickNumber}
            >
              {quest}
            </QuestBox>
          ))}
        </QuestBoxWrapper>
      </MoblieScroll>
      <NextBox
        ectClick={ectClick}
        questClick={questClick}
        clickNumber={clickNumber}
        onClick={questBoxClick}
      >
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
  padding-bottom: 50px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
`;

const QuestBox = styled.a`
  border: ${({ id, questClick, clickNumber }) => {
    return id === questClick || id === clickNumber
      ? "1.5px solid black"
      : "1px solid #c9c9c9";
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
  font-weight: ${({ id, questClick, clickNumber }) => {
    return id === questClick || id === clickNumber ? "bold" : "normal";
  }};
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
  background-color: ${({ ectClick, questClick, clickNumber }) => {
    return ectClick === true || questClick > -1 || clickNumber > -1
      ? "black"
      : "#C9C9C9";
  }};
  cursor: pointer;
  color: white;
`;

import React, { useState } from "react";
import styled from "styled-components";

const RepairList2 = [
  [
    [
      "색상 문제 / 블랙 스크린",
      "액정 터치 불가",
      "액정 파손 (LCD 번짐 있음)",
      "액정 파손 (LCD 번짐 없음)",
    ],
    ["정품 추출", "호환 액정", "재생 액정"],
  ],
  ["마이크 불량 (소리 인식 못함)", "스피커 불량 (나오지 않거나 소리 작음)"],
  ["하우징 교체", "뒷판 파손"],
  ["볼륨버튼 불량", "전원버튼 불량", "홈버튼 불량"],
  ["후레쉬 불량", "후면카메라 불량", "전면카메라 불량"],
  ["이어폰 잭 불량", "충전잭 불량"],
  ["GPS 불량", "블루투스 불량", "Wifi 불량"],
  ["전원은 들어오나 부팅 불가", "전원이 안 들어옴"],
  ["기타 센서", "홍채 센서 불량", "지문 센서 불량", "Face ID 센서 불량"],
  [["배터리 교체"], ["일반 용량", "대용량"]],
  ["진동 불량", "진동 미발생"],
  ["리퍼"],
];

const PhoneRepairChoicePage2 = ({ clickNumber, setProcessCount }) => {
  const [listClickNumber, setListClickNumber] = useState(-1);
  const [underListClickNumber19, setUnderListClickNumber19] = useState(-1);
  const [ClickNumber19, setClickNumber19] = useState(false);

  return (
    <>
      <MoblieScroll>
        <PercentBar />
        <Percent>60%</Percent>
        <Question>
          선택한 수리 항목의
          <br /> 내용을 선택해 주세요
        </Question>
        <RepairListWrapper>
          {clickNumber === 0 || clickNumber === 9
            ? RepairList2[clickNumber][0].map((props, index) => (
                <RepairListBox
                  key={index}
                  id={index}
                  onClick={() => {
                    setListClickNumber(index);
                    setClickNumber19(true);
                  }}
                  listClickNumber={listClickNumber}
                >
                  {props}
                </RepairListBox>
              ))
            : RepairList2[clickNumber].map((props, index) => (
                <RepairListBox
                  key={index}
                  id={index}
                  onClick={() => {
                    setListClickNumber(index);
                    setProcessCount(3);
                  }}
                  listClickNumber={listClickNumber}
                >
                  {props}
                </RepairListBox>
              ))}
          {(ClickNumber19 === true && clickNumber === 0) ||
          (clickNumber === 9 && ClickNumber19 === true) ? (
            <UnderQuestionWrapper>
              <UnderQuestionTitle>수리 희망 부품</UnderQuestionTitle>
              {RepairList2[clickNumber][1].map((props, index) => (
                <UnderQuestionBox
                  key={index}
                  id={index}
                  onClick={() => {
                    setUnderListClickNumber19(index);
                    setClickNumber19(true);
                    setProcessCount(3);
                  }}
                  underListClickNumber19={underListClickNumber19}
                >
                  {props}
                </UnderQuestionBox>
              ))}
            </UnderQuestionWrapper>
          ) : null}
        </RepairListWrapper>
      </MoblieScroll>
      <NextBox listClickNumber={listClickNumber}>다음</NextBox>
    </>
  );
};

export default PhoneRepairChoicePage2;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PercentBar = styled.div`
  width: 60%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 58%;
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

const NextBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: ${({ listClickNumber }) => {
    return listClickNumber > -1 ? "black" : "#C9C9C9";
  }};
  color: white;
`;

const RepairListWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const RepairListBox = styled.div`
  border: ${({ id, listClickNumber }) => {
    return id === listClickNumber ? "1.5px solid black" : "1px solid #c9c9c9";
  }};
  border-radius: 10px;
  font-weight: ${({ id, listClickNumber }) => {
    return id === listClickNumber ? "bold" : "normal";
  }};
  width: 85%;
  height: 54px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const UnderQuestionWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 120px;
`;

const UnderQuestionTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

const UnderQuestionBox = styled.div`
  border: ${({ id, underListClickNumber19 }) => {
    return id === underListClickNumber19
      ? "1.5px solid black"
      : "1px solid #c9c9c9";
  }};
  border-radius: 10px;
  font-weight: ${({ id, underListClickNumber19 }) => {
    return id === underListClickNumber19 ? "bold" : "normal";
  }};
  width: 45%;
  height: 54px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 7%;
  cursor: pointer;
`;

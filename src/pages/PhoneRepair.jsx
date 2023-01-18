import React, { useState } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import MainPhoneRepairChoice from "./EachRepairChoice/MainPhoneRepairChoice";
import PhoneRepairChoice2 from "./EachRepairChoice/PhoneRepairChoice2";
import PhoneModelChocie3 from "./EachRepairChoice/ PhoneModelChocie3";
import RepairDetailChocie4 from "./EachRepairChoice/RepairDetailChocie4";

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

const PhoneRepair = () => {
  const [processCount, setProcessCount] = useState(1);
  const [clickNumber, setClickNumber] = useState(-1);
  const [listClickNumber, setListClickNumber] = useState(-1);
  const [underListClickNumber19, setUnderListClickNumber19] = useState(-1);
  const [choice4RepairMethodNumber, setChoice4RepairMethodNumber] =
    useState(-1);

  return (
    <MobileWrapper>
      <MobileContainer>
        <EachHeader
          title="내 폰 수리하기"
          processCount={processCount}
          setProcessCount={setProcessCount}
        />
        {processCount === 1 ? (
          <MainPhoneRepairChoice
            setProcessCount={setProcessCount}
            setClickNumber={setClickNumber}
            clickNumber={clickNumber}
            setListClickNumber={setListClickNumber}
            setUnderListClickNumber19={setUnderListClickNumber19}
          />
        ) : processCount === 2 ? (
          <PhoneRepairChoice2
            clickNumber={clickNumber}
            setProcessCount={setProcessCount}
            listClickNumber={listClickNumber}
            setListClickNumber={setListClickNumber}
            underListClickNumber19={underListClickNumber19}
            setUnderListClickNumber19={setUnderListClickNumber19}
          />
        ) : processCount === 3 ? (
          <PhoneModelChocie3 setProcessCount={setProcessCount} />
        ) : processCount === 4 ? (
          <RepairDetailChocie4
            setProcessCount={setProcessCount}
            setChoice4RepairMethodNumber={setChoice4RepairMethodNumber}
            choice4RepairMethodNumber={choice4RepairMethodNumber}
          />
        ) : null}
      </MobileContainer>
    </MobileWrapper>
  );
};

export default PhoneRepair;

const MobileWrapper = styled.div`
  background-color: #7f7f7f;
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

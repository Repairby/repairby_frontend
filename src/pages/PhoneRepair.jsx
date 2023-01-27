import React, { useState } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import MainPhoneRepairChoice from "./EachRepairChoice/MainPhoneRepairChoice";
import PhoneRepairChoice2 from "./EachRepairChoice/PhoneRepairChoice2";
import PhoneModelChocie3 from "./EachRepairChoice/ PhoneModelChocie3";
import RepairDetailChocie4 from "./EachRepairChoice/RepairDetailChocie4";
import RepairRegionChoice5 from "./EachRepairChoice/RepairRegionChoice5";

const PhoneRepair = () => {
  // page 넘길 때 사용
  const [processCount, setProcessCount] = useState(1);
  // 첫번째 메인 페이지에서 몇번째 선택지를 선택했는지
  const [clickNumber, setClickNumber] = useState(-1);
  // 첫번째 메인 페이지에서 1번과 9번을 선택했을 시
  const [underListClickNumber19, setUnderListClickNumber19] = useState(-1);
  // 두번째 페이지에서 몇번째 선택지를 선택했는지
  const [listClickNumber, setListClickNumber] = useState(-1);
  // 네번째 페이지에서 희망 수리 방식
  const [choice4RepairMethodNumber, setChoice4RepairMethodNumber] =
    useState(-1);
  // 견적서 변수들

  // 5 page 상세주소 변수
  const [addressDetail, setAddressDetail] = useState("");

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
        ) : processCount === 5 ? (
          <RepairRegionChoice5
            setProcessCount={setProcessCount}
            setAddressDetail={setAddressDetail}
            addressDetail={addressDetail}
          />
        ) : (
          <div>error</div>
        )}
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

import React, { useState } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import MainPhoneRepairChoice from "./EachRepairChoice/MainPhoneRepairChoice";
import PhoneRepairChoice2 from "./EachRepairChoice/PhoneRepairChoice2";
import PhoneModelChocie3 from "./EachRepairChoice/ PhoneModelChocie3";
import RepairDetailChocie4 from "./EachRepairChoice/RepairDetailChocie4";
import RepairRegionChoice5 from "./EachRepairChoice/RepairRegionChoice5";

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
        ) : processCount === 5 ? (
          <RepairRegionChoice5 setProcessCount={setProcessCount} />
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

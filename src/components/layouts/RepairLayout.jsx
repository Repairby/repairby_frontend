import React from "react";
import EachHeader from "../EachHeader";
import styled from "@emotion/styled";
import MobileLayout from "./MobileLayout";
import useRepairStore from "../../store/repair";
import { getRepairTitle } from "../../constants/repair";

const RepairLayout = children => {
  const { process } = useRepairStore();

  return (
    <MobileLayout>
      <EachHeader title="내 폰 수리하기" link="/e_request/" />
      <MoblieScroll>
        <PercentBar />
        <Percent>{process}%</Percent>
        <Question>{getRepairTitle(process)}</Question>
        {children}
      </MoblieScroll>
    </MobileLayout>
  );
};

export default RepairLayout;

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
  overflow: hidden;

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

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

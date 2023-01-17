import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const PhoneModelChocie3 = () => {
  return (
    <>
      <MoblieScroll>
        <PercentBar />
        <Percent>70%</Percent>
        <Question>
          수리받을 제품
          <br /> 조회하기
        </Question>
        <PhoneModelInputWrapper>
          <BsSearch className="search" />
          <PhoneModelInput placeholder="아이폰, 아이패드, 애플워치, 맥북, 에어팟 등" />
        </PhoneModelInputWrapper>
      </MoblieScroll>
      <NextBox>다음</NextBox>
    </>
  );
};

export default PhoneModelChocie3;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PercentBar = styled.div`
  width: 70%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 68%;
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

const PhoneModelInputWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 40px auto;

  .search {
    font-size: 14px;
  }
`;

const PhoneModelInput = styled.input`
  border: none;
  width: 83%;
  height: 30px;
  margin-left: 10px;
  font-size: 16px;
`;

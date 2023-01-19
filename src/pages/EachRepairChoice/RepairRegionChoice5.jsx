import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RepairRegionChoice5 = ({ setProcessCount }) => {
  return (
    <>
      <MoblieScroll>
        <PercentBar />
        <Percent>90%</Percent>
        <Question>
          수리 서비스를 받으실
          <br /> 지역을 선택해 주세요
        </Question>
        <InputWrapper>
          <InputTitle>파손 부분 설명 및 요청사항</InputTitle>
          <Input />
          <SearchButton>주소 검색</SearchButton>
        </InputWrapper>
      </MoblieScroll>

      <Link to="/request/success/">
        <NextBox onClick={() => setProcessCount(-1)}>다음</NextBox>
      </Link>
    </>
  );
};

export default RepairRegionChoice5;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PercentBar = styled.div`
  width: 90%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 88%;
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

const InputWrapper = styled.div`
    position: relative;
    margin-top: 50px;
  }
`;

const InputTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  color: black;
  margin-bottom: 17px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #c9c9c9;
  width: 88%;
  height: 30px;
  font-size: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &::placeholder {
    font-size: 10px;
  }
`;

const SearchButton = styled.button`
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 5%;
  top: 27px;
  width: 19%;
  height: 30px;
  color: #626262;
  cursor: pointer;
`;

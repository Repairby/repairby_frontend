import React from "react";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";

const EstimateListBox = ({
  createAt,
  estimateId,
  phoneModel,
  breakdownDetail,
  company,
}) => {
  return (
    <EstimateListBoxContainer href="/estimate/">
      <CreateAt>{createAt}</CreateAt>
      <EstimateBox>
        <EstimateId>{estimateId}</EstimateId>
        <DetailBox>
          <CompanyIconBox>
            <FaApple />
          </CompanyIconBox>
          <DetailDescription>
            <Company>{company}</Company>
            <PhoneModel>{phoneModel}</PhoneModel>
            <BreakdownDetail>{breakdownDetail}</BreakdownDetail>
          </DetailDescription>
        </DetailBox>
        <CompareEstimateCaseNumber>0건 비교견적 중</CompareEstimateCaseNumber>
      </EstimateBox>
    </EstimateListBoxContainer>
  );
};

export default EstimateListBox;

const EstimateListBoxContainer = styled.a`
  margin: 20px 0;
  cursor: pointer;
`;

const CreateAt = styled.div`
  font-size: 0.9rem;
  padding-left: 5%;
  margin-bottom: 10px;
`;

const EstimateBox = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px #e8e8e8;
  width: 90%;
  margin: 5px auto;
`;

const EstimateId = styled.div`
  padding-top: 15px;
  margin-top: 0.5rem;
  margin-left: 5%;
  font-size: 0.7rem;
  color: gray;
`;

const DetailBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-left: 3%;
  margin-right: 3%;
  height: 95px;
`;

const CompanyIconBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: gray;
`;

const DetailDescription = styled.div`
  width: 60%;
`;

const Company = styled.div`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #4d4d4d;
`;

const PhoneModel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const BreakdownDetail = styled.div`
  font-size: 0.9rem;
  color: #4d4d4d;
`;

const CompareEstimateCaseNumber = styled.div`
  text-align: end;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 5%;
  padding-bottom: 15px;
`;

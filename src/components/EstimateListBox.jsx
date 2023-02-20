import React from "react";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { URL } from "../constants/router";
import { COMPANY } from "../constants/estimate";
import { getCreateAtTime } from "../util/time";

const EstimateListBox = ({ data }) => {
  const date = getCreateAtTime(data.createAt);

  return (
    <Link to={URL.estimate} state={data.estimateId}>
      <EstimateListBoxContainer>
        <CreateAt>{data.createAtTime}</CreateAt>
        <EstimateBox>
          <EstimateId>{data.estimateId}</EstimateId>
          <DetailBox>
            <CompanyIconBox>
              {data.company === COMPANY.apple && <FaApple loading="lazy" />}
              {data.company === COMPANY.samsung && (
                <img
                  src="/images/MyEstimatePage/Samsung.png"
                  alt="삼성 로고"
                  loading="lazy"
                />
              )}
            </CompanyIconBox>
            <DetailDescription>
              <Company>{data.company}</Company>
              <PhoneModel>{data.phoneModel}</PhoneModel>
              <BreakdownDetail>{data.breakdownDetail}</BreakdownDetail>
            </DetailDescription>
          </DetailBox>
          <CompareEstimateCaseNumber>
            {data.specialistNumber}건 비교견적 중
          </CompareEstimateCaseNumber>
        </EstimateBox>
      </EstimateListBoxContainer>
    </Link>
  );
};

export default EstimateListBox;

const EstimateListBoxContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
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

  img {
    width: 90px;
  }
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

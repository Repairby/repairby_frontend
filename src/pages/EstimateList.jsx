import React from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

// mui
import useEstimateList from "../hooks/useEstimateList";
import { EstimateListComponent } from "../components/feature/estimate/EstimateListComponent";

const EstimateList = () => {
  const navigate = useNavigate();
  const estimateId = location.state.estimateId;
  const token = localStorage.getItem("token");

  const { type } = useParams();
  const { data, error, isLoading } = useEstimateList(estimateId, type);

  const location = useLocation();

  const onClickMenu = type => {
    return navigate(`/estimate/${type}`);
  };

  return (
    <MobileWrapper>
      <MobileContainer>
        <HeaderContainer>
          <IoIosArrowBack
            className="IoArrowBack"
            onClick={() => navigate(-1)}
          />
          견적 리스트
          <AiOutlineMenu className="AiLineMenu" />
        </HeaderContainer>
        <MoblieScroll>
          <Menu>
            <Order
              onClick={() => onClickMenu("recommadation")}
              isActive={type === "recommandation"}
            >
              추천순
            </Order>
            <Order
              onClick={() => onClickMenu("distance")}
              isActive={type === "distance"}
            >
              추천순
            </Order>
            <Order
              onClick={() => onClickMenu("career")}
              isActive={type === "career"}
            >
              추천순
            </Order>
            {/* <RecommendationOrder
              onClick={() => onClickMenu("recommadation")}
              clickedType={type}
            >
              추천순
            </RecommendationOrder>
            <DistanceOrder
              onClick={() => onClickMenu("distance")}
              clickedType={type}
            >
              거리순
            </DistanceOrder>
            <CareerOrder
              onClick={() => onClickMenu("career")}
              clickedType={type}
            >
              경력순
            </CareerOrder> */}
          </Menu>
          {isLoading ? (
            <div>Loading..</div>
          ) : (
            <EstimateListComponent listData={data} />
          )}
        </MoblieScroll>
      </MobileContainer>
    </MobileWrapper>
  );
};

export default EstimateList;

const MobileWrapper = styled.div`
  background-color: #3f3f3f;
`;

const MobileContainer = styled.div`
  position: relative;
  width: 376px;
  height: 100vh;
  max-height: auto;
  margin: 0 auto;
  background-color: #212121;

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 12px 11px;
  background-color: #212121;
  color: white;
  margin-bottom: 3px;

  .IoArrowBack {
    font-size: 30px;
    cursor: pointer;
  }

  .AiLineMenu {
    font-size: 25px;
    cursor: pointer;
  }
`;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 3px;
  padding-bottom: 15px;
`;

const Order = styled.div`
  ${({ isActive }) => {
    isActive
      ? css`
          color: white;
          border-bottom: "1px solid white";
        `
      : css`
          color: gray;
          border-bottom: "1px solid gray";
        `;
  }}/* ${({ type }) => {
    switch (type) {
      case "recommandation":
        return css`
          color: white;
        `;
      case "carrer":
        return css`
          padding: 13px 0 13px 70px;
        `;
      case "distance":
        return css`
          padding: 13px 0;
        `;
      default:
        return css`
          padding: 13px 0 13px 80px;
        `;
    }
  }} */
`;

//FIX: 통합
const RecommendationOrder = styled.div`
  color: ${({ recommendationClick }) => {
    return recommendationClick ? "white" : "gray";
  }};
  border-bottom: ${({ recommendationClick }) => {
    return recommendationClick ? "1px solid white" : "1px solid gray";
  }};
  margin-right: 25px;
`;

const DistanceOrder = styled.div`
  color: ${({ distanceClick }) => {
    return distanceClick ? "white" : "gray";
  }};
  border-bottom: ${({ distanceClick }) => {
    return distanceClick ? "1px solid white" : "1px solid gray";
  }};
  margin-right: 25px;
`;

const CareerOrder = styled.div`
  color: ${({ careerClick }) => {
    return careerClick ? "white" : "gray";
  }};
  border-bottom: ${({ careerClick }) => {
    return careerClick ? "1px solid white" : "1px solid gray";
  }};
`;

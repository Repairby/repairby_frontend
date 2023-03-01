import React, { memo } from "react";
import styled from "@emotion/styled";
import { Box, Rating } from "@mui/material";
import { StarIcon } from "@mui/icons-material/Star";

const Estimate = ({ data, index, method }) => {
  return (
    <EstimateBoxWrapper key={index}>
      <EstimateBox>
        <TopTitleBox>
          <img src={data.imageurlSl} alt="견적리스트 사진" />
          <TopDetailWrapper>
            <Title>{data.name}</Title>
            <Ragion>{data.region}</Ragion>
            <RatingBox
              sx={{
                width: 100,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                size="small"
                name="half-rating-read"
                value={Number(data.rating)}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarIcon
                    size="small"
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
              <RatingNumber>{data.rating}</RatingNumber>
              <RatingReviewNumber>
                ({data.ratingReviewNumber})
              </RatingReviewNumber>
            </RatingBox>
          </TopDetailWrapper>
        </TopTitleBox>
        <Contents>{data.contents}</Contents>
        <hr />
        <Price>
          예상 견적 <span>{data.initRepaircost}</span>
        </Price>
      </EstimateBox>
    </EstimateBoxWrapper>
  );
};

export default Estimate;

const EstimateBoxWrapper = styled.div`
  background-color: white;
  width: 336px;
  min-height: 182px;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const EstimateBox = styled.div`
  width: 90%;
  margin: 15px 0;
`;

const TopTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  img {
    width: 63px;
    height: 63px;
    border-radius: 5px;
  }
`;

const TopDetailWrapper = styled.div`
  width: 136px;
  height: 57px;
  margin-left: 15px;
  margin-top: 4px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Ragion = styled.div`
  font-size: 13px;
  color: gray;
`;

const RatingNumber = styled.span`
  font-size: 13px;
  line-height: 10px;
  padding-top: 4px;
  padding-left: 4px;
`;

const RatingReviewNumber = styled.span`
  display: inline;
  padding-top: 4px;
  font-size: 12px;
  font-weight: bold;
  padding-left: 4px;
`;

const RatingBox = styled(Box)({
  marginTop: "3px",
});

const Contents = styled.div`
  font-size: 14px;
  margin-top: 10px;
  height: auto;
`;

const Price = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  color: gray;

  span {
    color: black;
    font-weight: bold;
    font-size: 1.27rem;
    margin-left: 5px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 3px;
  padding-bottom: 15px;
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

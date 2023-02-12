import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

// mui
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const CompanyEstimateList = [
  {
    picture: "https://www.cnphone.co.kr/d_fileinfo/img/220220627112053.jpg",
    companyName: "춘천 케어샵",
    region: "강원 춘천시",
    rating: "4",
    ratingNumber: "5.0",
    ratingReviewNumber: "6",
    contents:
      "당일수리 2~3시간 소요됩니다 모델, 색상별 재고가 달라서 방문전에 연락주시면 감사합니다",
    price: "210,000원",
  },
  {
    picture: "https://www.cnphone.co.kr/d_fileinfo/img/220220627112053.jpg",
    companyName: "춘천 케어샵",
    region: "강원 춘천시",
    rating: "4",
    ratingNumber: "5.0",
    ratingReviewNumber: "6",
    contents:
      "당일수리 2~3시간 소요됩니다 모델, 색상별 재고가 달라서 방문전에 연락주시면 감사합니다",
    price: "210,000원",
  },
  {
    picture: "https://www.cnphone.co.kr/d_fileinfo/img/220220627112053.jpg",
    companyName: "춘천 케어샵",
    region: "강원 춘천시",
    rating: "4",
    ratingNumber: "5.0",
    ratingReviewNumber: "6",
    contents:
      "당일수리 2~3시간 소요됩니다 모델, 색상별 재고가 달라서 방문전에 연락주시면 감사합니다",
    price: "210,000원",
  },
  {
    picture: "https://www.cnphone.co.kr/d_fileinfo/img/220220627112053.jpg",
    companyName: "춘천 케어샵",
    region: "강원 춘천시",
    rating: "4",
    ratingNumber: "5.0",
    ratingReviewNumber: "6",
    contents:
      "당일수리 2~3시간 소요됩니다 모델, 색상별 재고가 달라서 방문전에 연락주시면 감사합니다",
    price: "210,000원",
  },
];

const EstimateList = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(2);
  const [recommendationClick, setRecommendationClick] = useState(true);
  const [distanceClick, setDistanceClick] = useState(false);
  const [careerClick, setCareerClick] = useState(false);
  const location = useLocation();
  const estimateId = location.state.estimateId.estimateId;
  console.log(estimateId);

  const MenuClick = num => {
    if (num === 1) {
      setRecommendationClick(true);
      setDistanceClick(false);
      setCareerClick(false);
    } else if (num === 2) {
      setRecommendationClick(false);
      setDistanceClick(true);
      setCareerClick(false);
    } else if (num === 3) {
      setRecommendationClick(false);
      setDistanceClick(false);
      setCareerClick(true);
    } else {
    }
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
            <RecommendationOrder
              onClick={() => MenuClick(1)}
              recommendationClick={recommendationClick}
            >
              추천순
            </RecommendationOrder>
            <DistanceOrder
              onClick={() => MenuClick(2)}
              distanceClick={distanceClick}
            >
              거리순
            </DistanceOrder>
            <CareerOrder onClick={() => MenuClick(3)} careerClick={careerClick}>
              경력순
            </CareerOrder>
          </Menu>
          {CompanyEstimateList.map((props, index) => (
            <EstimateBoxWrapper key={index}>
              <EstimateBox>
                <TopTitleBox>
                  <img src={props.picture} alt="견적리스트 사진" />
                  <TopDetailWrapper>
                    <Title>{props.companyName}</Title>
                    <Ragion>{props.region}</Ragion>
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
                        value={value}
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
                      <RatingNumber>{props.ratingNumber}</RatingNumber>
                      <RatingReviewNumber>
                        ({props.ratingReviewNumber})
                      </RatingReviewNumber>
                    </RatingBox>
                  </TopDetailWrapper>
                </TopTitleBox>
                <Contents>{props.contents}</Contents>
                <hr />
                <Price>
                  예상 견적 <span>{props.price}</span>
                </Price>
              </EstimateBox>
            </EstimateBoxWrapper>
          ))}
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

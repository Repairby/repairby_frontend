import React from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

const RequestSuccess = () => {
  return (
    <MobileWrapper>
      <MobileContainer>
        <EachHeader title="내 폰 수리하기" />
        <MoblieScroll>
          <RequestSuccessMessageWrapper>
            <FiCheck className="circleCheck" />
            <RequestSuccessMessage>
              수리 견적 요청이 완료되었습니다
            </RequestSuccessMessage>
            <RequestSuccessMessageDescription>
              잠시 후 카카오 알림톡으로 견적이 수신됩니다
            </RequestSuccessMessageDescription>
          </RequestSuccessMessageWrapper>
          <RequestDetailWrapper>
            <RequestDetailInfoWrapper>
              <RequestDetailTitle>요청 내용</RequestDetailTitle>
              <RequestDetailInfo1>
                제품 정보<span>아이폰14 PRO</span>
              </RequestDetailInfo1>
              <RequestDetailInfo2>
                수리 내용<span>색상 문제 / 블랙 스크린</span>
              </RequestDetailInfo2>
              <hr />
              <RequestDetailTitle>상세 내용</RequestDetailTitle>
              <RequestDetailInfo>수리 상세 요청 내용</RequestDetailInfo>
              <RequestDetailInfoAnswer>
                블랙 스크린이 뜹니다
              </RequestDetailInfoAnswer>
              <RequestDetailInfo>희망 수리 방식</RequestDetailInfo>
              <RequestDetailInfoAnswer>매장 방문 수리</RequestDetailInfoAnswer>
              <RequestDetailInfo>수리 서비스를 받을 지역</RequestDetailInfo>
              <RequestDetailInfoAnswer>
                강원 춘천시 동내면 춘천순환로 55
              </RequestDetailInfoAnswer>
            </RequestDetailInfoWrapper>
          </RequestDetailWrapper>
        </MoblieScroll>
        <Link to="/estimate/">
          <NextBox>내 견적 조회하기</NextBox>
        </Link>
      </MobileContainer>
    </MobileWrapper>
  );
};

export default RequestSuccess;

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

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #e9e9e9;
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
  color: white;
  cursor: pointer;
  background-color: black;
`;

const RequestSuccessMessageWrapper = styled.div`
  background-color: white;
  text-align: center;
  width: 100%;
  height: 226px;

  .circleCheck {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50px;
    padding: 15px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

const RequestSuccessMessage = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 13px;
`;

const RequestSuccessMessageDescription = styled.div`
  font-size: 12px;
  color: #686868;
`;

const RequestDetailWrapper = styled.div`
  margin-top: 8px;
  background-color: white;
`;

const RequestDetailTitle = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
`;

const RequestDetailInfoWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 43px;
  width: 90%;
  margin: 0 auto;

  hr {
    border-top: 1px dashed #919191;
  }
`;

const RequestDetailInfo1 = styled.div`
  margin-bottom: 15px;
  color: #686868;
  display: flex;
  justify-content: end;
  font-size: 15px;

  span {
    width: 82.8%;
    color: black;
    font-weight: 500;
    text-align: end;
  }
`;

const RequestDetailInfo2 = styled.div`
  color: #686868;
  display: flex;
  justify-content: end;
  font-size: 15px;
  padding-bottom: 30px;

  span {
    width: 82.8%;
    color: black;
    font-weight: 500;
    text-align: end;
  }
`;

const RequestDetailInfo = styled.div`
  color: #686868;
  font-size: 15px;
  padding-bottom: 10px;
`;

const RequestDetailInfoAnswer = styled.div`
  font-size: 15px;
  padding-bottom: 30px;
  font-weight: 500;
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import axios from "axios";

const RequestSuccess = () => {
  const location = useLocation().state;

  useEffect(() => {
    const estimateInfo = new FormData();

    const estimateData = {
      requests: location.requests,
      receipt: location.receipt,
      address: location.addressDetail,
      product_information: location.productInformation,
      repair_contents: location.repairContents,
    };

    const token = localStorage.getItem("token");

    const blob = new Blob([JSON.stringify(estimateData)], {
      type: "application/json",
    });
    estimateInfo.append("image", location.image);
    estimateInfo.append("estimate", blob);

    axios
      .post("/estimate", estimateInfo, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(response.data);
        console.log("응답성공");
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }, []);

  return (
    <MobileWrapper>
      <MobileContainer>
        <EachHeader title="내 폰 수리하기" link="/e_request/" />
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
          <SeprationSpace />
          <RequestDetailWrapper>
            <RequestDetailInfoWrapper>
              <RequestDetailTitle>요청 내용</RequestDetailTitle>
              <RequestDetailInfo1>
                제품 정보<span>{location.productInformation}</span>
              </RequestDetailInfo1>
              <RequestDetailInfo2>
                수리 내용<span>{location.repairContents}</span>
              </RequestDetailInfo2>
              <hr />
              <RequestDetailTitle>상세 내용</RequestDetailTitle>
              <RequestDetailInfo>수리 상세 요청 내용</RequestDetailInfo>
              <RequestDetailInfoAnswer>
                {location.requests}
              </RequestDetailInfoAnswer>
              <RequestDetailInfo>희망 수리 방식</RequestDetailInfo>
              <RequestDetailInfoAnswer>
                {location.receipt}
              </RequestDetailInfoAnswer>
              <RequestDetailInfo>수리 서비스를 받을 지역</RequestDetailInfo>
              <RequestDetailInfoAnswer>
                {location.addressDetail}
              </RequestDetailInfoAnswer>
            </RequestDetailInfoWrapper>
          </RequestDetailWrapper>
        </MoblieScroll>
        <Link to="/MyEstimatePage/">
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
  background-color: white;
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
  overflow: hidden;
  word-break: break-all;
`;

const SeprationSpace = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e9e9e9;
`;

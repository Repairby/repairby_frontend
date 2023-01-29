import React from "react";
import styled from "styled-components";
import { FaComment } from "react-icons/fa";

// kakao login key
const REST_API_KEY = "2e1887af2cd18d04ddb8fcf700547c24";
const REDIRECT_URI = "http://localhost:3000/kakao-login";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginEstimateBoxList = [
  { title: "아이폰 수리 견적 도착!", price: "280,000원" },
  { title: "내 갤럭시 판매 견적은?", price: "850,000원" },
  { title: "중고폰을 찾고 계신가요?", price: "475,000원" },
];

const Login = () => {
  return (
    <MobileWrapper>
      <MobileContainer>
        <MainTitle>
          휴대폰 비교견적!
          <br />
          Repairby에서
          <br />
          쉽고 빠르게
        </MainTitle>
        {LoginEstimateBoxList.map((props, index) => (
          <EstimateBoxWrapper key={index} index={index}>
            <EstimateBox>
              <DetailBox>
                <UserIconBox>
                  <LoginUserImg
                    src={`/images/Login/LoginImage${index + 1}.png`}
                    alt="loginImg"
                    index={index}
                  />
                </UserIconBox>
                <DetailDescription>
                  <DetailTitle>{props.title}</DetailTitle>
                  <EstimatePrice>{props.price}</EstimatePrice>
                </DetailDescription>
              </DetailBox>
            </EstimateBox>
          </EstimateBoxWrapper>
        ))}
        <LoginDescription>
          견적 요청 및 내용 확인을 위해 사용자 인증이 필요합니다.
        </LoginDescription>
        <KakaoLoginButton href={KAKAO_AUTH_URL}>
          <FaComment />
          <span>카카오 로그인</span>
        </KakaoLoginButton>
      </MobileContainer>
    </MobileWrapper>
  );
};

export default Login;

const MobileWrapper = styled.div`
  background-color: white;
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

const MainTitle = styled.div`
  text-align: start;
  font-size: 30px;
  font-weight: bold;
  margin-left: 12%;
  padding-top: 40px;
  margin-bottom: 15px;
  line-height: 38px;
`;

const EstimateBoxWrapper = styled.div`
  display: flex;
  justify-content: ${({ index }) => {
    return index === 0 ? "end" : index === 1 ? "start" : "center";
  }};
  padding: 10px 5%;
`;

const EstimateBox = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 15px 3px #f0f0f0;
  width: 260px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const DetailBox = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 7%;
  width: 100%;
  height: 55px;
`;

const UserIconBox = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: gray;
`;

const LoginUserImg = styled.img`
  width: ${({ index }) => {
    return index === 2 ? "40px" : "45px";
  }};
  height: 45px;
  background-color: ${({ index }) => {
    return index === 0 ? "#fefced" : index === 1 ? "#E3FDFE" : "#FFF2F2";
  }};
  border-radius: 50px;
  padding: 10px;
`;

const DetailDescription = styled.div`
  width: 80%;
  text-align: end;
`;

const DetailTitle = styled.div`
  font-size: 0.9rem;
  margin-top: 7px;
  margin-bottom: 8px;
  color: #4d4d4d;
`;

const EstimatePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const LoginDescription = styled.div`
  font-size: 0.8rem;
  color: #989898;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const KakaoLoginButton = styled.a`
  margin: 18px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  border-radius: 12px;
  width: 80%;
  height: 55px;
  font-size: 18px;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;

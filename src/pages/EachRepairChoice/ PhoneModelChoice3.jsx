import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const PhoneModelChoice3 = ({ setProcessCount, setProductInformation }) => {
  const [phoneModelData, setPhoneModelData] = useState([]);
  const [phoneModelValue, setPhoneModelValue] = useState("왜 그러는겨");
  const [saveInputValue, setSaveInputValue] = useState(false);

  const phoneSearch = async value => {
    try {
      console.log(value);
      await axios
        .get("/phone", { params: { phone_name: value } })
        .then(response => {
          console.log(response.data);
          console.log("응답성공");
          setProductInformation(value);
          setPhoneModelData(response.data);
        })
        .catch(error => {
          console.log(error);
          throw new Error(error);
        });
    } catch (e) {
      console.log("폰 모델 조회 실패", e);
    }
  };

  console.log(saveInputValue);
  console.log(phoneModelValue);
  return (
    <>
      <PercentBar />
      <Percent>70%</Percent>
      <Question>
        수리받을 제품
        <br /> 조회하기
      </Question>
      <PhoneModelInputWrapper>
        <BsSearch className="search" />
        <PhoneModelInput
          placeholder="아이폰, 아이패드, 애플워치, 맥북, 에어팟 등"
          onChange={event => phoneSearch(event.target.value)}
          defaultValue={saveInputValue ? phoneModelValue : null}
        />
      </PhoneModelInputWrapper>

      <MoblieScroll>
        {phoneModelData.map((phoneModel, index) => (
          <PhoneModelWrapper
            key={index}
            onClick={() => {
              setPhoneModelValue(phoneModel.product_information);
              setSaveInputValue(true);
            }}
          >
            {phoneModel.product_information}
          </PhoneModelWrapper>
        ))}
      </MoblieScroll>
      <NextBox onClick={() => setProcessCount(4)}>다음</NextBox>
    </>
  );
};

export default PhoneModelChoice3;

const MoblieScroll = styled.div`
  height: 55%;
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

const PhoneModelWrapper = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  padding: 13px 0;
  margin: 0 auto;
  cursor: pointer;
`;

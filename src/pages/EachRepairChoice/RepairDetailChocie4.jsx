import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const RepairMethod = ["매장 방문 수리", "택배 수리", "기타"];

const RepairDetailChocie4 = ({
  setProcessCount,
  choice4RepairMethodNumber,
  setChoice4RepairMethodNumber,
}) => {
  const imgFile = useRef();
  const [imageFile, setImageFile] = useState("");
  const [img, setImg] = useState("");

  const saveImgFile = () => {
    const file = imgFile.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageFile(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <MoblieScroll>
        <PercentBar />
        <Percent>80%</Percent>
        <Question>
          원하시는 수리 내용을
          <br /> 상세하게 적어주세요
        </Question>
        <InputWrapper>
          <InputTitle>파손 부분 설명 및 요청사항</InputTitle>
          <Input placeholder="설명이 자세할 수록 견적이 정확해요" />
        </InputWrapper>
        <RepairMethodWrapper>
          <RepairMethodTitle>희망 수리 방식</RepairMethodTitle>
          <RepairMethodBoxWrapper>
            {RepairMethod.map((props, index) => (
              <RepairMethodBox
                key={index}
                id={index}
                onClick={() => {
                  setChoice4RepairMethodNumber(index);
                }}
                choice4RepairMethodNumber={choice4RepairMethodNumber}
              >
                {props}
              </RepairMethodBox>
            ))}
          </RepairMethodBoxWrapper>
        </RepairMethodWrapper>
        <ImageInputWrapper>
          <ImageInputTitle>참고 이미지 (선택사항)</ImageInputTitle>
          <form>
            <ModalImage
              id="fileUpload"
              type="file"
              accept="image/*"
              ref={imgFile}
              onChange={e => {
                saveImgFile();
                setImg(e.target.files[0]);
              }}
            />
            <ImageLabel htmlFor="fileUpload">
              {img ? (
                <img src={imageFile} alt="이미지 업로드" />
              ) : (
                <div>
                  <AiOutlinePlus className="plusIcon" />
                </div>
              )}
            </ImageLabel>
          </form>
        </ImageInputWrapper>
      </MoblieScroll>
      <NextBox onClick={() => setProcessCount(4)}>다음</NextBox>
    </>
  );
};

export default RepairDetailChocie4;

const MoblieScroll = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PercentBar = styled.div`
  width: 80%;
  height: 2px;
  background-color: black;
`;

const Percent = styled.div`
  padding-left: 78%;
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
    margin-top: 30px;
  }
`;

const InputTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
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

const RepairMethodWrapper = styled.div`
  margin-top: 45px;
  margin-bottom: 40px;
`;

const RepairMethodTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  color: black;
  margin-bottom: 20px;
`;

const RepairMethodBoxWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 3%;
`;

const RepairMethodBox = styled.div`
  border: ${({ id, choice4RepairMethodNumber }) => {
    return id === choice4RepairMethodNumber
      ? "1.5px solid black"
      : "1px solid #c9c9c9";
  }};
  border-radius: 10px;
  font-weight: ${({ id, choice4RepairMethodNumber }) => {
    return id === choice4RepairMethodNumber ? "bold" : "normal";
  }};
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 3%;
  cursor: pointer;
`;

const ImageInputWrapper = styled.div`
  margin-bottom: 100px;
`;

const ImageInputTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  color: black;
`;

const ModalImage = styled.input`
  visibility: hidden;
`;

const ImageLabel = styled.label`
  pointer-events: none;
  cursor: pointer;

  img {
    display: flex;
    width: 105px;
    height: 105px;
    border-radius: 5%;
    margin-left: 5%;
    pointer-events: auto;
    cursor: pointer;
  }

  div {
    pointer-events: auto;
    cursor: pointer;
    margin-left: 5%;
    border: 1px dashed #b2b2b2;
    width: 105px;
    height: 105px;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b2b2b2;
    font-size: 27px;
    cursor: pointer;

    :hover {
      background-color: #b2b2b2;
      border: none;
      color: white;
    }
  }
`;

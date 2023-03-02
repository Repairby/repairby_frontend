import React, { useEffect } from "react";
import RepairLayout from "../../components/layouts/RepairLayout";
import { styled } from "@emotion/styled";
import useRepairStore from "../../store/repair";
import {
  ADDITIONAL_LIST,
  FIRST_REPAIR,
  SUB_LIST,
  hasAdditionalQuestion,
} from "../../constants/repair";
import { useNavigate } from "react-router-dom";

const RepairQuestionPage = () => {
  const navigate = useNavigate();
  const { repair, setRepair, increaseProcess, resetProcess, resetRepair } =
    useRepairStore();

  const isInit = Object.keys(repair).length === 0; // false
  const isAdditional = hasAdditionalQuestion.includes(repair.subQuestion);

  const onClickQuestion = key => {
    //process 갱신 (+10)
    increaseProcess();
    //store 갱신 (저장)
    setRepair({
      first: key,
    });
  };

  const onClickSubQuestion = key => {
    //process 갱신 (+10)
    increaseProcess();
    //store 갱신 (저장
    setRepair({
      ...repair,
      subQuestion: key,
    });
    //조건필요
    if (!isAdditional)
      return navigate({
        pathname: "/",
      });
  };

  const onClickAdditional = key => {
    setRepair({
      ...repair,
      additional: key,
    });
    return navigate({
      pathname: "/search",
    });
  };

  useEffect(() => {
    //store 초기화
    resetProcess();
    resetRepair();
  }, []);

  return (
    <RepairLayout>
      <QuestBoxWrapper>
        {isInit
          ? FIRST_REPAIR.map((firstItem, index) => (
              <QuestBox
                key={firstItem.key}
                id={index}
                onClick={() => onClickQuestion(firstItem.key)}
                isActive={firstItem.key === repair.key}
              >
                {firstItem.text}
              </QuestBox>
            ))
          : SUB_LIST[repair.first].map((sub, index) => (
              <QuestBox
                key={index}
                id={index}
                onClick={() => onClickSubQuestion(sub.key)}
                // 다음 버튼 있을 시
                // isActive={sub.key === clickedItem}
              >
                {sub.text}
              </QuestBox>
            ))}
        {isAdditional &&
          ADDITIONAL_LIST[repair.subQuestion].map((additional, index) => (
            <QuestBox
              key={index}
              id={index}
              onClick={() => onClickAdditional(additional.key)}
              // 다음 버튼 있을 시
              // isActive={sub.key === clickedItem}
            >
              {additional.text}
            </QuestBox>
          ))}
      </QuestBoxWrapper>
    </RepairLayout>
  );
};

export default RepairQuestionPage;

const QuestBoxWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
`;

const QuestBox = styled.a`
  border: ${({ isActive }) => {
    return isActive ? "1.5px solid black" : "1px solid #c9c9c9";
  }};
  border-radius: 10px;
  white-space: pre-line;
  width: 47%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  font-weight: ${({ isActive }) => {
    return isActive ? "bold" : "normal";
  }};
`;

import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { VscCircleFilled } from "react-icons/vsc";
import EstimateListBox from "../components/EstimateListBox";
import { Link } from "react-router-dom";

const EstimateList = [
  {
    createAt: "2023.01.19 14:07",
    estimateId: "20230119-000002",
    phoneModel: "아이폰14 PRO",
    breakdownDetail: "하우징 교체",
    company: "애플",
  },
  {
    createAt: "2023.01.19 14:07",
    estimateId: "20230119-000002",
    phoneModel: "아이폰14 PRO",
    breakdownDetail: "하우징 교체",
    company: "애플",
  },
  {
    createAt: "2023.01.19 14:07",
    estimateId: "20230119-000002",
    phoneModel: "아이폰14 PRO",
    breakdownDetail: "하우징 교체",
    company: "애플",
  },
  {
    createAt: "2023.01.19 14:07",
    estimateId: "20230119-000002",
    phoneModel: "아이폰14 PRO",
    breakdownDetail: "하우징 교체",
    company: "애플",
  },
];

const MyEstimatePage = () => {
  const [fixMenuButtonClick, setFixMenuButtonClick] = useState(true);
  const [saleMenuButtonClick, setSaleFixMenuButtonClick] = useState(false);

  return (
    <MobileWrapper>
      <MobileContainer>
        <EstimateHeaderWrapper>
          <Link to="/">
            <HomeIcon />
          </Link>
          <EstimateHeader>
            안녕하세요
            <br />
            이예진님.
          </EstimateHeader>
          <EstimateAddDetail>
            <GoBell className="BellIcon" />
            오늘 새로운 견적이 <span>0개</span> 추가되었어요!
          </EstimateAddDetail>
        </EstimateHeaderWrapper>
        <EstimateMenu>
          <FixMenu
            onClick={() => {
              setFixMenuButtonClick(true);
              setSaleFixMenuButtonClick(false);
            }}
            fixMenuButtonClick={fixMenuButtonClick}
          >
            수리
            <VscCircleFilled className="circleIcon" />
          </FixMenu>
          <SaleMenu
            onClick={() => {
              setFixMenuButtonClick(false);
              setSaleFixMenuButtonClick(true);
            }}
            saleMenuButtonClick={saleMenuButtonClick}
          >
            판매
            <VscCircleFilled className="circleIcon" />
          </SaleMenu>
        </EstimateMenu>
        {fixMenuButtonClick === true && saleMenuButtonClick === false ? (
          <EstimateListWrapper>
            {EstimateList.map((props, index) => (
              <EstimateListBox
                key={index}
                createAt={props.createAt}
                estimateId={props.estimateId}
                phoneModel={props.phoneModel}
                breakdownDetail={props.breakdownDetail}
                company={props.company}
              />
            ))}
          </EstimateListWrapper>
        ) : null}
      </MobileContainer>
    </MobileWrapper>
  );
};

export default MyEstimatePage;

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

const EstimateHeaderWrapper = styled.div`
  background-color: black;
  color: white;
  height: 235px;
  positions: relative;

  .homeIcon {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 2%;
    right: 5%;
  }
`;

const HomeIcon = styled(AiFillHome)`
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 5%;
  color: white;
`;

const EstimateHeader = styled.div`
  font-size: 30px;
  padding-top: 75px;
  padding-left: 10%;
  line-height: 2.5rem;
  font-weight: bold;
`;

const EstimateAddDetail = styled.div`
  padding-top: 35px;
  padding-left: 10%;
  font-size: 15px;

  span {
    font-weight: bold;
  }

  .BellIcon {
    padding-right: 5px;
  }
`;

const EstimateMenu = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;
  background-color: white;
  position: sticky;
  top: 0;
`;

const FixMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5%;
  cursor: pointer;
  color: ${({ fixMenuButtonClick }) => {
    return fixMenuButtonClick === true ? "black" : "#c9c9c9";
  }};

  .circleIcon {
    font-size: 12px;
    text-align: center;
    width: 100%;
    color: ${({ fixMenuButtonClick }) => {
      return fixMenuButtonClick === true ? "black" : "gray";
    }};
  }
`;

const SaleMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  padding-left: 7%;
  cursor: pointer;
  color: ${({ saleMenuButtonClick }) => {
    return saleMenuButtonClick === true ? "black" : "#c9c9c9";
  }};

  .circleIcon {
    font-size: 12px;
    text-align: center;
    width: 100%;
    color: ${({ saleMenuButtonClick }) => {
      return saleMenuButtonClick === true ? "black" : "gray";
    }};
  }
`;

const EstimateListWrapper = styled.div`
  padding-bottom: 50px;
`;

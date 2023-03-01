import React, { useState } from "react";
import styled from "styled-components";
import useEstimate from "../hooks/useEstimate";
import EstimateListBox from "../components/EstimateListBox";
import { AiFillHome } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { VscCircleFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { URL } from "../constants/router";

const MyEstimatePage = () => {
  const [clickedMenu, setClickedMenu] = useState("fix");
  const { estimateData, isLoading, isError } = useEstimate();

  const onClickMenu = clickedMenu => {
    setClickedMenu(clickedMenu);
  };

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error..</div>;
  }

  return (
    //FIX: LAYOUT 적용
    <MobileWrapper>
      <MobileContainer>
        <EstimateHeaderWrapper>
          <Link to={URL.home}>
            <HomeIcon />
          </Link>
          <EstimateHeader>
            안녕하세요
            <br />
            이예진님.
          </EstimateHeader>
          <EstimateAddDetail>
            <GoBell className="BellIcon" />
            오늘 새로운 견적이 <span>{estimateData.today}</span>개 추가되었어요!
          </EstimateAddDetail>
        </EstimateHeaderWrapper>
        <EstimateMenu>
          <FixMenu onClick={() => onClickMenu("fix")} clickedMenu={clickedMenu}>
            수리
            <VscCircleFilled className="circleIcon" />
          </FixMenu>
          <SaleMenu
            onClick={() => onClickMenu("sale")}
            clickedMenu={clickedMenu}
          >
            판매
            <VscCircleFilled className="circleIcon" />
          </SaleMenu>
        </EstimateMenu>
        {clickedMenu === "fix" && (
          <EstimateListWrapper>
            {estimateData.member.map((data, index) => (
              <EstimateListBox key={index} data={data} />
            ))}
          </EstimateListWrapper>
        )}
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
    font-size: 1.2rem;
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
  color: ${({ clickedMenu }) => {
    return clickedMenu === "sale" ? "black" : "#c9c9c9";
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

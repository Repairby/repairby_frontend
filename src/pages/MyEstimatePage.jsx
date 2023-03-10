import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { VscCircleFilled } from "react-icons/vsc";
import EstimateListBox from "../components/EstimateListBox";
import { Link } from "react-router-dom";
import axios from "axios";

const MyEstimatePage = () => {
  const [fixMenuButtonClick, setFixMenuButtonClick] = useState(true);
  const [saleMenuButtonClick, setSaleFixMenuButtonClick] = useState(false);
  const [estimateData, setEstimateData] = useState([]);
  const [todayEstimateData, setTodayEstimateData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchAndSetEstimateData() {
      axios
        .get("/member/estimates", { headers: { Authorization: token } })
        .then(response => {
          console.log(response.data);
          setEstimateData(response.data);
          console.log("응답성공");
        })
        .catch(error => {
          console.log("내 견적 조회 에러", error);
          throw new Error(error);
        });
    }
    async function fetchAndSetTodayEstimateData() {
      axios
        .get("/today/estimates", { headers: { Authorization: token } })
        .then(response => {
          console.log(response.data);
          setTodayEstimateData(response.data);
          console.log("응답성공");
        })
        .catch(error => {
          console.log("오늘 추가된 견적서 개수 오류", error);
          throw new Error(error);
        });
    }
    fetchAndSetEstimateData();
    fetchAndSetTodayEstimateData();
  }, []);

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
            오늘 새로운 견적이 <span>{todayEstimateData}</span>개 추가되었어요!
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
            {estimateData.map((props, index) => (
              <EstimateListBox
                key={index}
                createAt={props.created_at}
                estimateId={props.estimate_id}
                phoneModel={props.product_information}
                breakdownDetail={props.repair_contents}
                company={props.manufacturer}
                specialistNumber={props.specialistNumber}
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

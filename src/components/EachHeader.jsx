import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const EachHeader = ({ title, processCount, setProcessCount }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const backButton = processCount => {
    if (processCount >= 2) {
      setProcessCount(processCount - 1);
    } else {
      if (
        window.location.href === "http://localhost:3000/request/" &&
        token != null
      ) {
        navigate("/");
      } else {
        navigate(-1);
      }
    }
  };

  return (
    <HeaderContainer>
      <IoIosArrowBack
        className="IoArrowBack"
        onClick={() => backButton(processCount)}
      />
      {title}
      <GrClose className="IoClose" />
    </HeaderContainer>
  );
};

export default EachHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  padding: 12px 11px;
  background-color: white;

  .IoArrowBack {
    font-size: 30px;
    cursor: pointer;
  }

  .IoClose {
    font-size: 25px;
    cursor: pointer;
  }
`;

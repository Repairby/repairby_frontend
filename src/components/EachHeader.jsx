import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const EachHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <IoIosArrowBack className="IoArrowBack" onClick={() => navigate(-1)} />
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
  font-size: 20px;
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

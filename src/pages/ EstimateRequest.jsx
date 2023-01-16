import React from "react";
import styled from "styled-components";
import EachHeader from "../components/EachHeader";
import { device } from "../Device";

const EstimageRequest = () => {
  return (
    <EstimageRequestWrapper>
      <Container>
        <EachHeader title="견적 요청" />
      </Container>
    </EstimageRequestWrapper>
  );
};

export default EstimageRequest;

const EstimageRequestWrapper = styled.div`
  background-color: #eff0f2;
`;

const Container = styled.div`
  width: 376px;
  height: 100vh;
  max-height: auto;
  margin: 0 auto;
  background-color: white;

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

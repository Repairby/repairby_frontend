import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimageRequest from "./pages/ EstimateRequest";
import styled from "styled-components";
import PhoneRepair from "./pages/PhoneRepair";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e_request/" element={<EstimageRequest />} />
        <Route path="/request/" element={<PhoneRepair />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const MobileWrapper = styled.div`
  background-color: #eff0f2;
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

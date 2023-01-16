import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimageRequest from "./pages/ EstimateRequest";
import styled from "styled-components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e_request/" element={<EstimageRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimageRequest from "./pages/ EstimateRequest";
import PhoneRepair from "./pages/PhoneRepair";
import RequestSuccess from "./pages/RequestSuccess";
import MyEstimatePage from "./pages/MyEstimatePage";
import Login from "./pages/Login/Login";
import EstimateList from "./pages/EstimateList";
import KakaoLogin from "./pages/Login/KakaoLogin";
import { URL } from "./constants/router";
import NotFoundPage from "./pages/404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.home} element={<Home />} />
        <Route path={URL.estimate_request} element={<EstimageRequest />} />
        <Route path="/request/" element={<PhoneRepair />} />
        <Route path="/request/success/" element={<RequestSuccess />} />
        <Route path="/MyEstimatePage/" element={<MyEstimatePage />} />
        <Route path="/user_login/" element={<Login />} />
        <Route path="/estimate/" element={<EstimateList />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

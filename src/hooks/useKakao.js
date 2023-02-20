import { useEffect } from "react";
import { axiosInstance } from "../axios/axiosInstance";
import { useNavigate } from "react-router";

const useKakao = code => {
  let navigate = useNavigate();

  useEffect(() => {
    axiosInstance(`/login/oauth2/kakao?code=${code}`)
      .then(res => {
        console.log(res.headers);
        console.log("응답성공");

        const token = res.headers.authorization;

        localStorage.setItem("token", token);
        navigate("/request/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch(error => {
        console.log("소셜로그인 에러", error);
        window.alert("로그인에 실패하였습니다.");
        navigate("/user_login/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  });
};

export default useKakao;

import React from "react";
import useKakao from "../../hooks/useKakao";

const KakaoLogin = () => {
  let code = new URL(window.location.href).searchParams.get("code");

  useKakao(code);

  return <></>;
};

export default KakaoLogin;

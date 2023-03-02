import { axios } from "axios";

const baseConfig = {
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const authConfig = {
  baseURL: "",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authentication: `${localStorage.getIem("token")}`,
  },
};

// 기본적으로 사용되는 axios instance
export const axiosInstance = axios.create(baseConfig);

//token 인증이 필요한 instance
export const authAxiosInstance = axios.create(authConfig);

authAxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === "401") {
      //error handling
    }

    throw error;
  }
);

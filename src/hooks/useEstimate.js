import { useEffect, useState } from "react";
import { authAxiosInstance } from "../axios/axiosInstance";
import axios from "axios";

const useEstimate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const [estimateData, setEstimateData] = useState([]);
  // const [todayEstimateData, setTodayEstimateData] = useState([]);

  const [estimateData, setEstimateData] = useState();

  useEffect(() => {
    axios
      .all([
        authAxiosInstance("/member/estimates"),
        authAxiosInstance("/today/estimatuseEstimatees"),
      ])
      .then(response => {
        axios.spread((memberResponse, todayResponse) => {
          const reponse = {
            member: memberResponse.data,
            today: todayResponse.data,
          };

          setEstimateData(reponse);
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
      });

    // async function fetchAndSetEstimateData() {
    //   authAxiosInstance("/member/estimates")
    //     .then(response => {
    //       console.log(response.data);
    //       setEstimateData(response.data);
    //       console.log("응답성공");
    //     })
    //     .catch(error => {
    //       console.log("내 견적 조회 에러", error);
    //       throw new Error(error);
    //     });
    // }

    // async function fetchAndSetTodayEstimateData() {
    //   axios
    //     .get("/today/estimates", { headers: { Authorization: token } })
    //     .then(response => {
    //       console.log(response.data);
    //       setTodayEstimateData(response.data);
    //       console.log("응답성공");
    //     })
    //     .catch(error => {
    //       console.log("오늘 추가된 견적서 개수 오류", error);
    //       throw new Error(error);
    //     });
    // }
    // fetchAndSetEstimateData();
    // fetchAndSetTodayEstimateData();
  }, []);

  return { estimateData, isLoading, isError };
};

export default useEstimate;

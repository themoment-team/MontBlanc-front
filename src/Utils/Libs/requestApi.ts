import axios, { AxiosRequestConfig } from "axios";
export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export const ACCESS_TOKEN_NAME = "Authorization";

// 토큰 없는 파라미터가 필요한 api 요청
export const requestApiWithBodyWithoutToken = async (p: AxiosRequestConfig) => {
  try {
    const res = await axios({
      method: p.method,
      url: p.baseURL + p.url,
      paramsSerializer: p.paramsSerializer,
      data: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
          ...p.headers,
        },
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰과 파라미터 없는 api 요청
export const requestApiWithoutBodyWithoutToken = async (
  p: AxiosRequestConfig
) => {
  try {
    const res = await axios({
      method: p.method,
      url: p.baseURL + p.url,
      data: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
          ...p.headers,
        },
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰이 필요한 파라미터 없는 api 요청
export const requestApiWithoutBodyWithToken = async (p: AxiosRequestConfig) => {
  try {
    const accessToken = window.localStorage.getItem("themoment_token");
    const res = await axios({
      method: p.method,
      url: p.baseURL + p.url,
      data: {
        headers: {
          [ACCESS_TOKEN_NAME]: `${accessToken}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
          ...p.headers,
        },
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

//토큰과 파라미터가 모두 필요한 API 요청
export const requestApiWithBodyWithToken = async (p: AxiosRequestConfig) => {
  try {
    const accessToken = window.localStorage.getItem("themoment_token");
    const res = await axios({
      method: p.method,
      url: p.baseURL + p.url,
      paramsSerializer: p.paramsSerializer,
      data: {
        headers: {
          [ACCESS_TOKEN_NAME]: `${accessToken}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
          ...p.headers,
        },
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

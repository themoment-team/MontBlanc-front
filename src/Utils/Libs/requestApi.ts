import axios, { AxiosInstance } from "axios";
export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
export const ACCESS_TOKEN_NAME = "Authorization";

// 토큰 없는 파라미터가 필요한 api 요청
export const requestApiWithBodyWithoutToken = async (
  BASE_URL: string,
  method: ,
  url: string,
  body: any,
  header: any
) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰과 파라미터 없는 api 요청
export const requestApiWithoutBodyWithoutToken = async (
  BASE_URL: any,
  method: string | number,
  url: any,
  header: any
) => {
  try {
    const res = await axios[method](BASE_URL + url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰이 필요한 파라미터 없는 api 요청
export const requestApiWithoutBodyWithToken = async (
  BASE_URL: any,
  method: string | number,
  url: any,
  header: any
) => {
  try {
    const accessToken = window.localStorage.getItem("jupjup_token");
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: `${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

//토큰과 파라미터가 모두 필요한 API 요청
export const requestApiWithBodyWithToken = async (
  BASE_URL: any,
  method: string | number,
  body: any,
  url: any,
  header: any
) => {
  try {
    const accessToken = window.localStorage.getItem("jupjup_token");
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        "Authorization" : `${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
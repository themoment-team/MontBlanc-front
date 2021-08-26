import { BASE_HEADER, BASE_URL } from "Constants/Config.json";
import axios, { AxiosRequestConfig } from "axios";

export interface hasToken {
  hasToken?: boolean;
}

const RequestApi = (
  p: AxiosRequestConfig,
  condition: hasToken = { hasToken: false }
) => {
  let accessToken: string | null = null;
  let refreshToken: string | null = null;
  if (condition.hasToken) {
    accessToken = localStorage.getItem("themoment_token");
    refreshToken = localStorage.getItem("themoment_token_refresh");
  }
  try {
    let header = Object.assign(BASE_HEADER, p.headers);
    if (accessToken) {
      header = Object.assign(header, {
        Authorization: accessToken,
        RefreshToken: refreshToken,
      });
    }
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
      headers: header,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default RequestApi;

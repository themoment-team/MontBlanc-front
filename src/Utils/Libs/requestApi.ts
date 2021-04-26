import axios, { AxiosRequestConfig } from "axios";
export const ACCESS_TOKEN_NAME = "Authorization";
import { BASE_URL, BASE_HEADER } from "Constants/Config.json";

export interface hasPrameterAndToken {
  hasToken: boolean;
  hasParameter: boolean;
}

const RequestApi = async (
  p: AxiosRequestConfig,
  condition: hasPrameterAndToken = { hasToken: true, hasParameter: true }
) => {
  const headers = p.headers;
  const accessToken =
    condition.hasToken === true
      ? localStorage.getItem("themoment_token")
      : undefined;
  const parameter =
    condition.hasParameter === true ? p.paramsSerializer : undefined;
  try {
    const res = await axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      paramsSerializer: parameter,
      data: {
        headers: Object.assign(BASE_HEADER, headers, {
          [ACCESS_TOKEN_NAME]: accessToken,
        }),
        body: p.data,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default RequestApi;

import { BASE_URL, BASE_HEADER } from "Constants/Config.json";
import axios, { AxiosRequestConfig } from "axios";
import { useRecoilState } from "recoil";
import * as A from "../../Atom/AtomPresenter";

export interface hasToken {
  hasToken?: boolean;
}

const RequestApi = async (
  p: AxiosRequestConfig,
  condition: hasToken = { hasToken: false }
) => {
  const [accessToken, setAccessToken] = useRecoilState(A.AccessToken);
  const [refreshToken, setRefreshToken] = useRecoilState(A.RefreshToken);
  if (condition.hasToken) {
    setAccessToken(localStorage.getItem("themoment_token"));
    setRefreshToken(localStorage.getItem("themoment_token_refresh"));
  }
  try {
    let header = Object.assign(BASE_HEADER, p.headers);
    if (accessToken) {
      header = Object.assign(header, {
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
    const res = await axios({
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

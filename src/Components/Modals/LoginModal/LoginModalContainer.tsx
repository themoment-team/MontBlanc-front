import admin from "Api/admin";
import { HasAdminToken } from "Atom";
import { useState } from "react";
import { Styles } from "react-modal";
import { useSetRecoilState } from "recoil";

export const useLogin = (close: () => void) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const setLogged = useSetRecoilState(HasAdminToken);

  const TryLogin = async () => {
    try {
      const res = await admin.login(id, pass);
      localStorage.setItem("themoment_token", res.data.data.accessToken);
      localStorage.setItem(
        "themoment_token_refresh",
        res.data.data.refreshToken
      );
      setLogged(true);
      close();
    } catch (e) {
      const message = (e.message = "Error: Request failed with status code 404"
        ? "올바르지 않은 아이디 또는 비밀번호입니다."
        : "로그인 에러가 발생하였습니다. 개발팀에 문의해주세요.");
      alert(message);
    }
  };

  return [setId, setPass, TryLogin];
};

export const customStyles: Styles = {
  content: {
    width: "620px",
    height: "630px",
  },
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
};

import admin from "Api/admin";
import { HasAdminToken } from "Atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const useLogin = () => {
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
    } catch (e) {
      console.log(e);
      alert("로그인에 실패하셨습니다.");
    }
  };

  return [setId, setPass, TryLogin];
};

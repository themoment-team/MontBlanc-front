import { useRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import { useEffect } from "react";
import admin from "Api/admin";

export const useCheckLogged = () => {
  const [logged, setHasToken] = useRecoilState(HasAdminToken);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

  return [logged];
};

export const useLogout = () => {
  const [logged, setHasToken] = useRecoilState(HasAdminToken);
  const tryLogout = async () => {
    try {
      await admin.logout();
      localStorage.removeItem("themoment_token");
      localStorage.removeItem("themoment_token_refresh");
      setHasToken(false);
    } catch (e) {
      alert(e);
    }
  };

  return tryLogout;
};

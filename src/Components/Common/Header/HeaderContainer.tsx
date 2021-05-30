import { useSetRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import admin from "Api/admin";
import { useHistory } from "react-router";

export const useLogout = () => {
  const setHasToken = useSetRecoilState(HasAdminToken);
  const history = useHistory();
  const tryLogout = async () => {
    try {
      await admin.logout();
      localStorage.removeItem("themoment_token");
      localStorage.removeItem("themoment_token_refresh");
      setHasToken(false);
    } catch (e) {
      alert(e);
    }
    history.push("/");
  };

  return tryLogout;
};

import { useRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import admin from "Api/admin";

export const useLogout = () => {
  const [_, setHasToken] = useRecoilState(HasAdminToken);
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

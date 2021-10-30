import { AdminController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class Admin {
  login(id: string, pass: string) {
    try {
      const data = {
        email: id,
        password: pass,
      };
      return RequestApi({
        method: "POST",
        url: AdminController.login(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  signup(id: string, name: string, pass: string) {
    try {
      const data = {
        id,
        name,
        pass,
      };
      return RequestApi({
        method: "POST",
        url: AdminController.signup(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  logout() {
    try {
      return RequestApi(
        {
          method: "POST",
          url: AdminController.logout(),
        },
        { hasToken: true },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  withdrawal(id: string, pass: string) {
    try {
      const data = {
        id,
        pass,
      };
      return RequestApi(
        {
          method: "POST",
          url: AdminController.withdrawal(),
          data: data,
        },
        { hasToken: true },
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Admin();

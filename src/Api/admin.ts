import { AdminController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class Admin {
  async login(id: string, pass: string) {
    try {
      const data = {
        id,
        pass,
      };
      const res = await RequestApi(
        {
          method: "POST",
          url: AdminController.login(),
          data: data,
        },
        { hasParameter: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async signup(id: string, name: string, pass: string) {
    try {
      const data = {
        id,
        name,
        pass,
      };
      const res = await RequestApi(
        {
          method: "POST",
          url: AdminController.signup(),
          data: data,
        },
        {
          hasParameter: true,
        }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async logout() {
    try {
      const res = await RequestApi(
        {
          method: "POST",
          url: AdminController.logout(),
        },
        { hasToken: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async withdrawal(id: string, pass: string) {
    try {
      const data = {
        id,
        pass,
      };
      const res = await RequestApi(
        {
          method: "POST",
          url: AdminController.withdrawal(),
          data: data,
        },
        { hasToken: true, hasParameter: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Admin();

import { TableController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import { Method } from "axios";

class Table {
  async viewAndWriteTable(content: string, method: Method) {
    try {
      const data = {
        content,
      };
      const res = await RequestApi(
        {
          method: method,
          url: TableController.detailUncomfortable(),
          data: data,
        },
        { hasParameter: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async addGoods(boardIdx: number) {
    try {
      const res = await RequestApi({
        method: "put",
        url: TableController.AddGoods(boardIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async cancleGoods(boardIdx: number) {
    try {
      const res = await RequestApi({
        method: "PUT",
        url: TableController.cancelGoods(boardIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Table();

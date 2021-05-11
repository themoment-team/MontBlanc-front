import { TableController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class Table {
  viewTop10Table() {
    try {
      return RequestApi({
        url: TableController.viewTop10Uncomfortable(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  viewTable() {
    try {
      return RequestApi({
        url: TableController.detailUncomfortable(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  writeTable(content: string) {
    try {
      const data = {
        content,
      };
      return RequestApi({
        method: "POST",
        url: TableController.detailUncomfortable(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  addGoods(boardIdx: number) {
    try {
      return RequestApi({
        method: "PUT",
        url: TableController.AddGoods(boardIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  cancleGoods(boardIdx: number) {
    try {
      return RequestApi({
        method: "PUT",
        url: TableController.cancelGoods(boardIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  amountUncomfortable() {
    try {
      return RequestApi({
        url: TableController.amountUncomfortable(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Table();

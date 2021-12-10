import { TableController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class Table {
  GetRankTable() {
    try {
      return RequestApi({
        url: TableController.getRankUncomfortable(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  getTable() {
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

  increaseGoods(uncomfortableIdx: number) {
    try {
      return RequestApi({
        method: "PATCH",
        url: TableController.increaseGoods(uncomfortableIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  decreaseGoods(uncomfortableIdx: number) {
    try {
      return RequestApi({
        method: "PATCH",
        url: TableController.decreaseGoods(uncomfortableIdx),
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

  dateSinceProjectStart() {
    try {
      return RequestApi({
        url: TableController.dateSinceProjectStart(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Table();

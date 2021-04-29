import RequestApi from "Utils/Libs/requestApi";
import { ImprovementController } from "Utils/Libs/requestUrls";

class Improvement {
  async editImprovement(improveIdx: number, content: string, header: string) {
    try {
      const data = {
        content,
        header,
      };
      return RequestApi(
        {
          method: "PUT",
          url: ImprovementController.detailSolved(improveIdx),
          data: data,
        },
        { hasToken: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteImprovement(improveIdx: number) {
    try {
      return RequestApi(
        {
          method: "DELETE",
          url: ImprovementController.detailSolved(improveIdx),
        },
        { hasToken: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async viewImprovment() {
    try {
      return RequestApi({
        url: ImprovementController.detail2Solved(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async saveImprovment(content: string, header: string) {
    try {
      const data = {
        content,
        header,
      };
      return RequestApi(
        {
          method: "POST",
          url: ImprovementController.detail2Solved(),
          data: data,
        },
        {
          hasToken: true,
        }
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Improvement();

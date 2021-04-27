import RequestApi from "Utils/Libs/requestApi";
import { ImprovementController } from "Utils/Libs/requestUrls";
import { Method } from "axios";

class Improvement {
  async editAndDeleteImprovement(
    improveIdx: number,
    content: string,
    header: string,
    method: Method
  ) {
    try {
      const data = {
        content,
        header,
      };
      const res = await RequestApi(
        {
          method: method,
          url: ImprovementController.detailSolved(improveIdx),
          data: data,
        },
        { hasParameter: true, hasToken: true }
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  async viewAndSaveImprovment(content: string, header: string, method: Method) {
    try {
      const data = {
        content,
        header,
      };
      const res = await RequestApi(
        {
          method: method,
          url: ImprovementController.detail2Solved(),
          data: data,
        },
        {
          hasParameter: true,
          hasToken: true,
        }
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Improvement();

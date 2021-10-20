import RequestApi from "Utils/Libs/requestApi";
import { ImprovementController } from "Utils/Libs/requestUrls";

class Improvement {
  UpdateImprovement(
    improveIdx: number,
    improveContent: string,
    improveHeader: string,
  ) {
    try {
      const data = {
        content: improveContent,
        title: improveHeader,
      };
      return RequestApi(
        {
          method: "PUT",
          url: ImprovementController.detailSolved(improveIdx),
          data: data,
        },
        { hasToken: true },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  deleteImprovement(improveIdx: number) {
    try {
      return RequestApi(
        {
          method: "DELETE",
          url: ImprovementController.detailSolved(improveIdx),
        },
        { hasToken: true },
      );
    } catch (e) {
      throw new Error(e);
    }
  }

  viewImprovment() {
    try {
      return RequestApi({
        url: ImprovementController.detail2Solved(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  saveImprovment(improveContent: string, improveHeader: string) {
    try {
      const data = {
        content: improveContent,
        title: improveHeader,
      };
      return RequestApi(
        {
          method: "POST",
          url: ImprovementController.detail2Solved(),
          data: data,
        },
        {
          hasToken: true,
        },
      );
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Improvement();

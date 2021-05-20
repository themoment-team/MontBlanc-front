import { AnswerController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import { Method } from "axios";

class Answer {
  async updateAndSaveAnswer(
    content: string,
    answerIdx: number,
    method: Method
  ) {
    try {
      const data = {
        content,
      };
      return RequestApi(
        {
          method: method,
          url: AnswerController.detailAnswer(answerIdx),
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

  delete(answerIdx: number) {
    try {
      return RequestApi({
        method: "DELETE",
        url: AnswerController.detailAnswer(answerIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  getAnswer(answerIdx: number) {
    try {
      return RequestApi({
        method: "GET",
        url: AnswerController.detailAnswer(answerIdx),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Answer();

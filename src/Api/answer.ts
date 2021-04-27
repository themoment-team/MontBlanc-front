import { AnswerController } from "./../Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import { Method } from "axios";

class Answer {
  async answer(content: string, answerIdx: number, method: Method) {
    try {
      const data = {
        content,
      };
      const res = await RequestApi(
        {
          method: method,
          url: AnswerController.detailAnswer(answerIdx),
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

export default new Answer();

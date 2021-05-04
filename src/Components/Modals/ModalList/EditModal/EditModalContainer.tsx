import Answer from "Api/answer";
import { useEffect, useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
}

export const useSaveAnswer = (idx: number, reqMethod: string) => {
  const [content, setContent] = useState("");

  const TrySave = async () => {
    const method = reqMethod === "PUT" ? "PUT" : "POST";
    try {
      await Answer.updateAndSaveAnswer(content, idx, method);
    } catch (e) {
      alert("오류가 발생하였습니다.");
    }
  };

  return [setContent, TrySave];
};

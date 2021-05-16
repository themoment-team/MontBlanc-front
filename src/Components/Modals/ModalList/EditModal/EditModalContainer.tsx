import Answer from "Api/answer";
import { useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
}

export const useUpdateAndSaveAnswer = (idx: number, reqMethod: string) => {
  const [content, setContent] = useState("");

  const TrySave = async () => {
    const method = reqMethod === "Update" ? "PUT" : "POST";
    try {
      await Answer.updateAndSaveAnswer(content, idx, method);
    } catch (e) {
      alert("오류가 발생하였습니다.");
    }
  };

  return [setContent, TrySave];
};

export const useDeleteAnswer = (idx: number) => {
  const TryDelete = async () => {
    try {
      await Answer.delete(idx);
    } catch (e) {
      alert(e);
    }
  };

  return TryDelete;
};

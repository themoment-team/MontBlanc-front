import Answer from "Api/answer";
import Improvement from "Api/improvement";
import { useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
}

export const useStateDistinction = (idx: number, state: string) => {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  let TryUpdate = () => {};
  let TrySave = () => {};
  let TryDelete = () => {};

  if (state === "answer") {
    TryUpdate = updateAndSaveAnswer(idx, "Update", content);
    TrySave = updateAndSaveAnswer(idx, "Save", content);
    TryDelete = deleteAnswer(idx);
  } else if (state === "improvment") {
    TryUpdate = updateImprovement(idx, content, heading);
    TrySave = saveImprovement(content, heading);
    TryDelete = deleteImprovement(idx);
  } else {
    console.log("error: 알맞지 않은 state");
    alert("예상치 못한 에러입니다. 개발자측에 문의해주세요.");
  }

  return [setContent, setHeading, TryUpdate, TrySave, TryDelete];
};

const updateImprovement = (idx: number, content: string, heading: string) => {
  const tryUpdate = async () => {
    try {
      window.location.reload();
      return await Improvement.UpdateImprovement(idx, content, heading);
    } catch (e) {
      alert("실제개선사례 업데이트 오류 : " + e);
    }
  };
  return tryUpdate;
};

const saveImprovement = (content: string, heading: string) => {
  const trySave = async () => {
    try {
      await Improvement.saveImprovment(content, heading);
      window.location.reload();
    } catch (e) {
      alert("실제개선사례 작성 또는 수정 오류 : " + e);
    }
  };
  return trySave;
};

const deleteImprovement = (idx: number) => {
  const tryDelete = async () => {
    try {
      await Improvement.deleteImprovement(idx);
      window.location.reload();
    } catch (e) {
      alert("실제개선사례 삭제 오류 : " + e);
    }
  };
  return tryDelete;
};

const updateAndSaveAnswer = (idx: number, state: string, content: string) => {
  const TryUpdateAndSave = async () => {
    const method = state === "Update" ? "PUT" : "POST";
    try {
      await Answer.updateAndSaveAnswer(content, idx, method);
      window.location.reload();
    } catch (e) {
      alert("답변 저장 또는 수정 오류 : " + e);
    }
  };

  return TryUpdateAndSave;
};

const deleteAnswer = (idx: number) => {
  const TryDelete = async () => {
    try {
      window.location.reload();
      await Answer.delete(idx);
    } catch (e) {
      alert("답변 삭제 오류 : " + e);
    }
  };

  return TryDelete;
};

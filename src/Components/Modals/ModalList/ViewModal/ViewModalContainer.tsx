import answer from "Api/answer";
import { useState, useEffect } from "react";

interface ResValue {
  answerIdx: number;
  title: string;
  writer: string;
  answerContent: string;
}

export const useGetModalValue = (idx: number) => {
  const [res, setRes] = useState<ResValue>({
    answerIdx: 1,
    title: "string",
    writer: "string",
    answerContent: "string",
  });

  const tryGet = async () => {
    return await answer.getAnswer(idx);
  };

  useEffect(() => {
    tryGet().then((res) => setRes(res.data.data));
  }, []);

  return res;
};

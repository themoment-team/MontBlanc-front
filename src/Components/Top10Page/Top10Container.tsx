import Table from "Api/table";
import { useEffect, useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
  goods: number;
}

export const useTop10 = () => {
  const [list, setList] = useState<list[]>([
    { boardIdx: 0, content: "", goods: 0 },
  ]);

  const tryTop10 = async () => {
    return await Table.viewTable();
  };

  useEffect(() => {
    tryTop10().then((res) => setList(res.data.list));
  }, []);
  return list;
};

export const heading: string[] = ["학교가 불편한 순간", "TOP 10"];
export const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

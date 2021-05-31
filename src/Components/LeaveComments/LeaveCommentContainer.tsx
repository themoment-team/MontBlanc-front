import Table from "Api/table";
import { useEffect, useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
  goods: number;
  idx: number;
}

export const useTable = () => {
  const [list, setList] = useState<list[]>([
    { boardIdx: 0, content: "", goods: 0, idx: 0 },
  ]);

  const tryTable = async () => {
    return await Table.viewTable();
  };

  useEffect(() => {
    tryTable().then((res) => setList(res.data.list));
  }, []);
  return list;
};

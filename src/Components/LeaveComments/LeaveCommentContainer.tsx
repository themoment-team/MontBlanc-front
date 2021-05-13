import Table from "Api/table";
import { useEffect, useState } from "react";

export interface list {
  boardIdx: number;
  content: string;
  goods: number;
  idx: number;
}

export const useViewTable = () => {
  const [list, setList] = useState<list[]>([]);

  const tryViewTable = async () => {
    return await Table.viewTable();
  };

  useEffect(() => {
    tryViewTable().then((res) => setList(res.data.list));
  }, []);
  return list;
};

export const useWriteTable = () => {
  const tryWriteTable = async (
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setContent("");
    window.location.reload();
    return await Table.writeTable(content);
  };

  return tryWriteTable;
};

import { useEffect, useMemo, useState } from "react";
import * as S from "./style";
import IssueBoxPresenter from "../IssueBox";
import Table from "Api/table";
import LeftBox from "Components/LeftBox";

interface list {
  uncomfortableIdx: number;
  content: string;
  goods: number;
  idx: number;
}

const useGetTable = () => {
  const [list, setList] = useState<list[]>([]);

  const getTable = async () => {
    return await Table.getTable();
  };

  useEffect(() => {
    getTable().then((res) => setList(res.data.list));
  }, []);
  return list;
};

const useShuffle = () => {
  const shuffle = (list: Array<list>) => {
    return list.sort(() => Math.random() - 0.5);
  };

  return shuffle;
};

const LeaveCommentsPage: React.FC = () => {
  const list = useGetTable();
  const shuffle = useShuffle();

  const provList = useMemo(() => shuffle(list), [list]);

  const list4 = provList.slice(0, list.length * (1 / 4));
  const list3 = provList.slice(list.length * (1 / 4), list.length * (2 / 4));
  const list2 = provList.slice(list.length * (2 / 4), list.length * (3 / 4));
  const list1 = provList.slice(list.length * (3 / 4), list.length);

  const heading: string[] = ["학교가 불편할 때는,", "언제였나요?"];
  const explanation: string[] = [];

  return (
    <S.LeaveCommentsBox>
      <LeftBox heading={heading} explanation={explanation} />
      <S.RightBox>
        <S.IssueBoxWrapper>
          {list1.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.uncomfortableIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list2.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.uncomfortableIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list3.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.uncomfortableIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list4.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.uncomfortableIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
      </S.RightBox>
    </S.LeaveCommentsBox>
  );
};

export default LeaveCommentsPage;

import React, { useMemo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as I from "../../Asset/SVG/index";
import * as S from "./styles";
import IssueBoxPresenter from "../IssueBox";
import Config from "Constants/Config.json";
import Table from "Api/table";

interface list {
  boardIdx: number;
  content: string;
  goods: number;
  idx: number;
}

const useViewTable = () => {
  const [list, setList] = useState<list[]>([]);

  const tryViewTable = async () => {
    return await Table.viewTable();
  };

  useEffect(() => {
    tryViewTable().then((res) => setList(res.data.list));
  }, []);
  return list;
};

const useWriteTable = () => {
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

const useShuffle = () => {
  const shuffle = (list: Array<list>) => {
    return list.sort(() => Math.random() - 0.5);
  };

  return shuffle;
};

const LeaveCommentsPage: React.FC = () => {
  const list = useViewTable();
  const history = useHistory();
  const shuffle = useShuffle();

  const [content, setContent] = useState("");
  const [length, setLength] = useState(0);

  const provList = useMemo(() => shuffle(list), [list]);

  const list4 = provList.slice(0, list.length * (1 / 4));
  const list3 = provList.slice(list.length * (1 / 4), list.length * (2 / 4));
  const list2 = provList.slice(list.length * (2 / 4), list.length * (3 / 4));
  const list1 = provList.slice(list.length * (3 / 4), list.length);

  const tryWriteTable = useWriteTable();

  const textAreaOnchange = (e: any) => {
    setLength(e.target.value.length);
    setContent(e.target.value);
  };

  return (
    <S.LeaveCommentsBox>
      <S.LeftBox>
        <S.H1>
          학교가 불편할 때는,
          <br />
          언제였나요?
        </S.H1>
        <S.Form>
          <textarea
            placeholder="자유롭게 의견을 남겨주세요."
            onChange={textAreaOnchange}
            value={content}
          />
          <S.Btn
            Length={length}
            onClick={() => {
              length >= 8 && tryWriteTable(content, setContent);
            }}
          >
            등 록
          </S.Btn>
        </S.Form>
        <S.Top10Btn onClick={() => history.push(Config.LINK.RANK)}>
          <span>
            많은 학생들이 공감한
            <br /> 불편함은 무엇일까요?
          </span>
          <S.LinkWrapper>
            <span>Top 30 보러가기</span>
            <I.RightArrow />
          </S.LinkWrapper>
        </S.Top10Btn>
      </S.LeftBox>
      <S.RightBox>
        <S.IssueBoxWrapper>
          {list1.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.boardIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list2.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.boardIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list3.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.boardIdx}
              content={table.content}
              key={index}
            />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list4.map((table: list, index) => (
            <IssueBoxPresenter
              idx={table.boardIdx}
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

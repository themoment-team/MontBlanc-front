import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import * as I from "../../Asset/SVG/index";
import * as S from "./styles";
import IssueBoxPresenter from "../IssueBox/IssueBoxPresenter";
import {
  useViewTable,
  useWriteTable,
  useShuffle,
  list,
} from "./LeaveCommentContainer";
import { useState } from "react";
import Config from "Constants/Config.json";

const LeaveCommentsPage: React.FC = () => {
  const list = useViewTable();
  const history = useHistory();
  const shuffle = useShuffle();

  const [content, setContent] = useState("");

  const provList = useMemo(() => shuffle(list), [list]);

  const list3 = provList.slice(0, list.length * (1 / 3));
  const list2 = provList.slice(list.length * (1 / 3), list.length * (2 / 3));
  const list1 = provList.slice(list.length * (2 / 3), list.length);

  const tryWriteTable = useWriteTable();
  const checkEnterKey = (e: any) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) tryWriteTable(content, setContent);
    }
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
            onChange={({ target: { value } }) => setContent(value)}
            value={content}
            onKeyUp={checkEnterKey}
          />
          <S.Btn
            onClick={() => {
              tryWriteTable(content, setContent);
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
            <span>Top 10 보러가기</span>
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
      </S.RightBox>
    </S.LeaveCommentsBox>
  );
};

export default LeaveCommentsPage;

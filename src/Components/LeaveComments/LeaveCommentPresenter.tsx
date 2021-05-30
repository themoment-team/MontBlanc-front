import React from "react";
import { Link } from "react-router-dom";
import * as I from "../../Asset/SVG/index";
import * as S from "./styles";
import IssueBoxPresenter from "../IssueBox/IssueBoxPresenter";
import { useViewTable, useWriteTable, list } from "./LeaveCommentContainer";
import { useState } from "react";
import Config from "Constants/Config.json";

const LeaveCommentsPage: React.FC = () => {
  const list = useViewTable();
  const [content, setContent] = useState("");

  const list3 = list.slice(0, list.length * (1 / 3));
  const list2 = list.slice(list.length * (1 / 3), list.length * (2 / 3));
  const list1 = list.slice(list.length * (2 / 3), list.length);

  const tryWriteTable = useWriteTable();

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
          />
          <S.Btn
            onClick={() => {
              tryWriteTable(content, setContent);
            }}
          >
            등 록
          </S.Btn>
        </S.Form>
        <S.Top10Btn>
          <span>
            많은 학생들이 공감한
            <br /> 불편함은 무엇일까요?
          </span>
          <Link to={Config.LINK.TOP10}>
            <span>Top 10 보러가기</span>
            <I.RightArrow />
          </Link>
        </S.Top10Btn>
      </S.LeftBox>
      <S.RightBox>
        <S.IssueBoxWrapper>
          {list1.map((table: list, _) => (
            <IssueBoxPresenter idx={table.boardIdx} content={table.content} />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list2.map((table: list, _) => (
            <IssueBoxPresenter idx={table.boardIdx} content={table.content} />
          ))}
        </S.IssueBoxWrapper>
        <S.IssueBoxWrapper>
          {list3.map((table: list, _) => (
            <IssueBoxPresenter idx={table.boardIdx} content={table.content} />
          ))}
        </S.IssueBoxWrapper>
      </S.RightBox>
    </S.LeaveCommentsBox>
  );
};

export default LeaveCommentsPage;

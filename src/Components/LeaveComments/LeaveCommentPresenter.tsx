import React from "react";
import { Link } from "react-router-dom";
import * as I from "../../Asset/SVG/index";
import * as S from "./styles";
import IssueBoxPresenter from "../IssueBox/IssueBoxPresenter";
import { useViewTable, useWriteTable, list } from "./LeaveCommentContainer";
import { useState } from "react";

const LeaveCommentsPage: React.FC = () => {
  const list = useViewTable();
  const [content, setContent] = useState("");

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
          <Link to="/topten">
            <span>Top 10 보러가기</span>
            <I.RightArrow />
          </Link>
        </S.Top10Btn>
      </S.LeftBox>
      <S.RightBox>
        {list.map((table: list, _) => (
          <IssueBoxPresenter
            idx={table.boardIdx}
            content={table.content}
            goods={table.goods}
          />
        ))}
      </S.RightBox>
    </S.LeaveCommentsBox>
  );
};

export default LeaveCommentsPage;

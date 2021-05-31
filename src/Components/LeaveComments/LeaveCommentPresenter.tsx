import React from "react";
import { Link } from "react-router-dom";
import * as I from "../../Asset/SVG/index";
import * as S from "./styles";
import IssueBoxPresenter from "../IssueBox/IssueBoxPresenter";
import { useTable, list } from "./LeaveCommentContainer";

const LeaveCommentsPage: React.FC = () => {
  const list = useTable();
  return (
    <S.LeaveCommentsBox>
      <S.LeftBox>
        <S.H1>
          학교가 불편할 때는,
          <br />
          언제였나요?
        </S.H1>
        <S.Form>
          <textarea placeholder="자유롭게 의견을 남겨주세요." />
          <S.Btn>등 록</S.Btn>
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

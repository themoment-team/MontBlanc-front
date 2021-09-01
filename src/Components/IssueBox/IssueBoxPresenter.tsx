import * as I from "../../Asset/Svg";
import * as S from "./styled";
import * as C from "./IssueBoxContainer";
import React, { Fragment } from "react";

const issueBox: React.FC<C.issueBoxProps> = (p: C.issueBoxProps) => {
  const randomColor = C.randomColorPicker();

  return (
    <S.IssueBoxStyle color={randomColor}>
      <S.IssueBoxHeading>
        <I.IssueSvg />
        <S.IssueNumber>{p.idx}번째 불편함</S.IssueNumber>
      </S.IssueBoxHeading>
      <S.Issue>
        {p.content.split("\n").map((content: string, index) => {
          return (
            <Fragment key={index}>
              {content}
              <br />
            </Fragment>
          );
        })}
      </S.Issue>
    </S.IssueBoxStyle>
  );
};

export default React.memo(issueBox);

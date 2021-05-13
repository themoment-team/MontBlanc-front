import * as I from "../../Asset/SVG";
import * as S from "./styled";
import * as C from "./IssueBoxContainer";

const issueBox: React.FC<C.issueBoxProps> = (p: C.issueBoxProps) => {
  const randomColor = C.randomColorPicker();

  return (
    <S.IssueBoxStyle color={randomColor}>
      <S.IssueBoxHeading>
        <I.IssueSvg />
        <S.IssueNumber>{p.idx}번째 불편함</S.IssueNumber>
      </S.IssueBoxHeading>
      <S.Issue>{p.content}</S.Issue>
    </S.IssueBoxStyle>
  );
};

export default issueBox;

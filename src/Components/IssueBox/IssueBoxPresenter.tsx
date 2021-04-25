import * as I from "../../Asset/SVG";
import * as S from "./styled";
import * as C from "./IssueBoxContainer";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";

const issueBox: React.FC = () => {
  const randomColor = C.randomColorPicker();

  return (
    <S.IssueBoxStyle color={randomColor}>
      <S.IssueBoxHeading>
        <I.IssueSvg />
        <S.IssueNumber>{C.issue.number}번째 불편함</S.IssueNumber>
      </S.IssueBoxHeading>
      <S.Issue>{C.issue.text}</S.Issue>
      <GoodBtn Background Goods={0}/>
    </S.IssueBoxStyle>
  );
};

export default issueBox;

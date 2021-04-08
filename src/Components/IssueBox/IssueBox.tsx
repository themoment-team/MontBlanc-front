import * as I from "../../Asset/SVG";
import * as S from "./styled";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";

const issueBox: React.FC = () => {
  const randomColorPicker = () => {
    const color: string[] = [
      "#CBD9E266",
      "#C4DFDB",
      "#A7C5EB66",
      "#61799866",
      "#699CAC66",
    ];

    const randomNumber: number = Math.floor(Math.random() * 6);

    return color[randomNumber];
  };

  const issue = {
    number: "294",
    issue: "학교가 너무너무 심심해요 심심해요심심",
  };
  const randomColor = randomColorPicker();

  return (
    <S.IssueBoxStyle color={randomColor}>
      <S.IssueBoxHeading>
        <I.IssueSvg />
        <S.IssueNumber>{issue.number}번째 불편함</S.IssueNumber>
      </S.IssueBoxHeading>
      <S.Issue>{issue.issue}</S.Issue>
      <GoodBtn Background />
    </S.IssueBoxStyle>
  );
};

export default issueBox;

import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import Improvment from "./improvmentItem/improvment";
import * as S from "./styled";
import * as I from "../../Asset/SVG";

const heading: string[] = ["실제 개선 사례"];
const explanation: string[] = [
  "다양한 의견을 남겨주셔서 정말 감사합니다.",
  "여러분들이 남겨주신 의견들을 바탕으로 하나하나 개선해나가고 있습니다.",
  "앞으로도 학교가 불편한 순간이 있다면 자유롭게 의견을 남겨주세요.",
];

interface ImprovmentPageProps {
  state: string;
}

const ImprovmentPage: React.FC<ImprovmentPageProps> = (
  p: ImprovmentPageProps
) => {
  return (
    <S.ImprovmentPageBox>
      <S.LeftBox>
        <PageExplanation heading={heading} explanation={explanation} />
        <S.Btn>
          학교가 불편한 순간을
          <br /> 자유롭게 남겨주세요.
          <Link to="/Leave_opinion">
            의견 남기기
            <I.RightArrow />
          </Link>
        </S.Btn>
      </S.LeftBox>
      <div>
        <Improvment color="#C3D7DE" />
        <Improvment color="#C0C9D6" />
        <Improvment color="#A7C5EB" />
      </div>
    </S.ImprovmentPageBox>
  );
};

export default ImprovmentPage;

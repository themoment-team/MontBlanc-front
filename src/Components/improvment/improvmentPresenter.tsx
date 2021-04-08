import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import Improvment from "./improvmentItem/improvment";
import * as S from "./styled";
import * as I from "../../Asset/SVG";
import * as C from "./imporvmentContainer";

const ImprovmentPage: React.FC = () => {
  return (
    <S.ImprovmentPageBox>
      <S.LeftBox>
        <PageExplanation heading={C.heading} explanation={C.explanation} />
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

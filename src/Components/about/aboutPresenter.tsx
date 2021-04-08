import { PageExplanation } from "../PageExplanation";
import * as S from "./styled";
import * as C from "./aboutContainer";

const AboutPage: React.FC = () => {
  return (
    <S.AboutBox>
      <PageExplanation heading={C.heading} explanation={C.explanation} />
    </S.AboutBox>
  );
};

export default AboutPage;

import { PageExplanation } from "../PageExplanation";
import * as S from "./styled";
import { useHeading } from "./aboutContainer";

const AboutPage: React.FC = () => {
  const [heading, explanation] = useHeading();

  return (
    <S.AboutBox>
      <PageExplanation heading={heading} explanation={explanation} />
    </S.AboutBox>
  );
};

export default AboutPage;

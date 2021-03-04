import * as S from "./styled";

interface PageExplanationProps {
  heading: string;
  explanation: string[];
  // link: string;
}

const PageExplanation: React.FC<PageExplanationProps> = ({
  heading,
  explanation,
}) => {
  return (
    <S.LeftBox>
      <S.heading>{heading}</S.heading>
      <S.explanation>
        {explanation.map((explanation) => {
          return (
            <>
              <span>{explanation}</span> <br />
            </>
          );
        })}
      </S.explanation>
    </S.LeftBox>
  );
};

const BtnExplannation: React.FC = () => {
  return <S.linkBtn></S.linkBtn>;
};

const Btn: React.FC = () => {
  return <S.linkBtn>의견 남기기</S.linkBtn>;
};

export default PageExplanation;

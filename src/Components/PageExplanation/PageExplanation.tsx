import * as S from "./styled";

interface PageExplanationProps {
  heading: string;
  explanation: string[];
}

const PageExplanation: React.FC<PageExplanationProps> = ({
  heading,
  explanation,
}) => {
  return (
    <>
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
    </>
  );
};

export default PageExplanation;

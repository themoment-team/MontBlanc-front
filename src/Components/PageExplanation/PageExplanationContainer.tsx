import React, { Fragment } from "react";
import * as S from "./styled";

interface PageExplanationProps {
  heading: string[];
  explanation: string[];
}

const PageExplanation: React.FC<PageExplanationProps> = ({
  heading,
  explanation,
}) => {
  return (
    <>
      <S.heading>
        {heading.map((heading, index) => {
          return (
            <Fragment key={index}>
              <span>{heading}</span> <br />
            </Fragment>
          );
        })}
      </S.heading>
      <S.explanation>
        {explanation.map((explanation, index) => {
          return (
            <Fragment key={index + 1}>
              <span>{explanation}</span> <br />
            </Fragment>
          );
        })}
      </S.explanation>
    </>
  );
};

export default PageExplanation;

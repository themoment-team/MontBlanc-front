import React from "react";
import * as S from "./style";

export const BeforeRankItem: React.FC = () => {
  return (
    <S.BoxWrapper>
      <S.SeasonBox>
        <S.Title>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 1
        </S.Title>
        <S.ContentBox></S.ContentBox>
        <S.ContentBox></S.ContentBox>
        <S.ContentBox></S.ContentBox>
      </S.SeasonBox>
      <S.SeasonBox2>
        <S.Title2>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 2
        </S.Title2>
        <S.ContentBox2></S.ContentBox2>
        <S.ContentBox2></S.ContentBox2>
        <S.ContentBox2></S.ContentBox2>
      </S.SeasonBox2>
    </S.BoxWrapper>
  );
};

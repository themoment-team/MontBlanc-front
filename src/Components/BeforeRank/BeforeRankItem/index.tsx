import React from "react";
import * as S from "./style";
import { BeforeRankModal } from "Components/Modals";

export const BeforeRankItem: React.FC = () => {
  const color: string[] = ["#A4ADFF", "#6C91EF"];

  return (
    <S.BoxWrapper>
      <S.SeasonBox color={color[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 1
        </p>
        <S.ContentBox color={color[0]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color[0]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color[0]}>
          <BeforeRankModal />
        </S.ContentBox>
      </S.SeasonBox>
      <S.SeasonBox color={color[1]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 2
        </p>
        <S.ContentBox color={color[1]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color[1]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color[1]}>
          <BeforeRankModal />
        </S.ContentBox>
      </S.SeasonBox>
    </S.BoxWrapper>
  );
};

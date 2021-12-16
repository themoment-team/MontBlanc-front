import React from "react";
import * as S from "./style";
import { BeforeRankModal } from "Components/Modals";

export const BeforeRankItem: React.FC = () => {
  const color1: string[] = [
    "#A4ADFF",
    "rgba(164, 173, 255, 0.8)",
    "rgba(164, 173, 255, 0.6)",
  ];
  const color2: string[] = [
    "#6C91EF",
    "rgba(108, 145, 239, 0.8)",
    "rgba(108, 145, 239, 0.6)",
  ];

  return (
    <S.BoxWrapper>
      <S.SeasonBox color={color1[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 1
        </p>
        <S.ContentBox color={color1[0]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color1[1]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color1[2]}>
          <BeforeRankModal />
        </S.ContentBox>
      </S.SeasonBox>
      <S.SeasonBox color={color2[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 2
        </p>
        <S.ContentBox color={color2[0]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color2[1]}>
          <BeforeRankModal />
        </S.ContentBox>
        <S.ContentBox color={color2[2]}>
          <BeforeRankModal />
        </S.ContentBox>
      </S.SeasonBox>
    </S.BoxWrapper>
  );
};

import React from "react";
import * as S from "./style";
import * as I from "Asset/SVG";
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
          <S.RankContentWrapper>
            <S.ContentRank color={color1[0]}>1</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
        <S.ContentBox color={color1[1]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={color1[1]}>2</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
        <S.ContentBox color={color1[2]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={color1[2]}>3</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
      </S.SeasonBox>
      <S.SeasonBox color={color2[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 2
        </p>
        <S.ContentBox color={color2[0]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={color2[0]}>1</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
        <S.ContentBox color={color2[1]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={color2[1]}>2</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
        <S.ContentBox color={color2[2]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={color2[2]}>3</S.ContentRank>
            <S.BoxContentWrapper>
              <S.Title>전공동아리 시간이 너무 부족해요 ㅠㅠ</S.Title>
              <S.Answer>학교에서 전공동아리 시간이 너무 부...</S.Answer>
            </S.BoxContentWrapper>
          </S.RankContentWrapper>
          <S.Likes>
            <I.GoodBtnSvg color="#fff" />
            385
          </S.Likes>
        </S.ContentBox>
      </S.SeasonBox>
    </S.BoxWrapper>
  );
};

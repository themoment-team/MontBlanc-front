import React from "react";
import * as S from "./style";
import * as I from "Asset/SVG";
import { BeforeRankModal } from "Components/Modals";

export const BeforeRankItem: React.FC = () => {
  const season1Color: string[] = ["#A4ADFF", "#A4ADFFCC", "#A4ADFF99"];
  const season2Color: string[] = ["#6C91EF", "#6C91EFCC", "#6C91EF99"];

  return (
    <S.BoxWrapper>
      <S.SeasonBox color={season1Color[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 1
        </p>
        <S.ContentBox color={season1Color[0]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season1Color[0]}>1</S.ContentRank>
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
        <S.ContentBox color={season1Color[1]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season1Color[1]}>2</S.ContentRank>
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
        <S.ContentBox color={season1Color[2]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season1Color[2]}>3</S.ContentRank>
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
      <S.SeasonBox color={season2Color[0]}>
        <p>
          2021년 8월 <br /> 학교가 불편한 순간 <br /> SEASON 2
        </p>
        <S.ContentBox color={season2Color[0]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season2Color[0]}>1</S.ContentRank>
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
        <S.ContentBox color={season2Color[1]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season2Color[1]}>2</S.ContentRank>
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
        <S.ContentBox color={season2Color[2]}>
          <BeforeRankModal />
          <S.RankContentWrapper>
            <S.ContentRank color={season2Color[2]}>3</S.ContentRank>
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

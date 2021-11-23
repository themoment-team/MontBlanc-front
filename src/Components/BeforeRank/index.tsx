import React from "react";
import { LeftBox } from "Components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";
import * as I from "../../Asset/SVG/index";
import * as S from "./style";
import { BeforeRankItem } from "./BeforeRankItem";

const heading: string[] = ["지난 TOP3 모아보기"];
const adminHeading: string[] = ["지난 TOP3 작성"];
const explanation: string[] = [
  "각 시즌동안 가장 좋아요를 많이 받은 불편함들을 모았습니다.  ",
  " 더 다양한 불편함들이 개선되는 그 날까지  ",
  "학교가 불편한 순간은 계속됩니다.",
];
const student: string[] = ["자세한 내용을 보려면 클릭해주세요!"];
const admin: string[] = ["답변 달고싶은 게시물을 클릭해주세요!"];
const BeforeRankPage: React.FC = () => {
  const logged = useRecoilValue(HasAdminToken);
  const history = useNavigate();
  const range = {
    min: { year: 2020, month: 3 },
    max: { year: 2025, month: 2 },
  };

  return (
    <S.BeforeRankPage>
      <LeftBox
        heading={!logged ? heading : adminHeading}
        explanation={explanation}
      ></LeftBox>
      <S.RightBox>
        <S.SeasonSelect>
          <div>
            <span>2021년 8월</span>
            <I.DropDownBtn></I.DropDownBtn>
          </div>
          {!logged ? student : admin}
        </S.SeasonSelect>
        {!logged ? <BeforeRankItem></BeforeRankItem> : null}
      </S.RightBox>
    </S.BeforeRankPage>
  );
};

export default BeforeRankPage;

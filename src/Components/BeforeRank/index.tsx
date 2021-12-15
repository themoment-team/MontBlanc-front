import React, { useState } from "react";
import { LeftBox } from "Components";
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

  const [dropView, setDropView] = useState<boolean>(false);

  const onClickDrop = async () => {
    await setDropView(!dropView);
    console.log(dropView);
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
            <p>2021년 8월</p>
            <span onClick={onClickDrop}>
              <I.DropDownBtn />
            </span>
          </div>
          {!logged ? student : admin}
        </S.SeasonSelect>
        {dropView ? (
          <S.DropMenu>
            <S.DropItem>2021년 1월</S.DropItem>
            <S.DropItem>2021년 2월</S.DropItem>
            <S.DropItem>2021년 3월</S.DropItem>
            <S.DropItem>2021년 4월</S.DropItem>
            <S.DropItem>2021년 5월</S.DropItem>
            <S.DropItem>2021년 6월</S.DropItem>
            <S.DropItem>2021년 7월</S.DropItem>
            <S.DropItem>2021년 8월</S.DropItem>
            <S.DropItem>2021년 9월</S.DropItem>
            <S.DropItem>2021년 10월</S.DropItem>
            <S.DropItem>2021년 11월</S.DropItem>
            <S.DropItem>2021년 12월</S.DropItem>
          </S.DropMenu>
        ) : (
          <></>
        )}
        {!logged ? <BeforeRankItem></BeforeRankItem> : <></>}
      </S.RightBox>
    </S.BeforeRankPage>
  );
};

export default BeforeRankPage;

import React, { useState, useReducer } from "react";
import * as I from "../../Asset/SVG";
import styled, { css } from "styled-components";

interface GoodBtnStyleElemProps {
  Liked: boolean;
  hasBackground: boolean;
}
interface GoodBtnProps {
  Background: boolean;
}

const GoodBtn: React.FC<GoodBtnProps> = ({ Background = true }) => {
  const [likeCnt, setLikeCnt] = useState<number>(324);
  const [isLiked, setLiked] = useState<boolean>(false);
  const onIncrease = () => {
    setLikeCnt(likeCnt => likeCnt + 1);
    setLiked(true);
  }
  const onDecrease = () => {
    setLikeCnt(likeCnt => likeCnt - 1);
    setLiked(false);
  }
  const onClickBtn = () => {
    !isLiked ? onIncrease() : onDecrease();
  };

  return (
    <GoodBtnStyle Liked={isLiked} onClick={onClickBtn} hasBackground={Background}>
      <I.GoodBtnSvg color={isLiked && Background ? "#fff" : "#6B7187"} />
      <LikeCnt Liked={isLiked} hasBackground={Background}>{likeCnt}</LikeCnt>
    </GoodBtnStyle>
  );
};

// 스타일 컴포넌트 구역

const GoodBtnStyle = styled.button<GoodBtnStyleElemProps>`
  ${props => (props.hasBackground ?
    css`
      padding: 7px 15px;
      min-width: 67px;
    ` : css`
      padding: 0;
    `
    )}
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: ${(props) => (props.Liked && props.hasBackground ? "#434C9C" : (props.hasBackground ? "#fff" : "none"))}; // 좋아요 제어후에 배경을 가졌는지 추가로 제어
`;

const LikeCnt = styled.span<GoodBtnStyleElemProps>`
  display: block;
  margin-left: 4px;
  color: ${(props) => (props.Liked && props.hasBackground ? "#fff" : "#6B7187")};
  padding-left: 5px;
`;

export default GoodBtn;

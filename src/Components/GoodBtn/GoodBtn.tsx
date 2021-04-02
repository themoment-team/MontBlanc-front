import React, { useState } from "react";
import * as I from "../../Asset/SVG";
import styled, { css } from "styled-components";

/*
 * back을 주고 싶은 경우에는 Background를 적어야 함
 * Default Prop은 true임
*/

interface GoodBtnStyleElemProps {
  Liked: boolean;
  hasBackground?: boolean; // Likecnt는 Background를 가질 필요가 없기 때문에 ? 붙였습니다.
}

interface GoodBtnProps {
  Background: boolean;
}

const GoodBtn: React.FC<GoodBtnProps> = ({ Background = true }) => { // 기본값으로 배경색을 가지고 있게 설정
  let [likeCnt, setLikeCnt] = useState(324); // 좋아요 수 useState
  let [isLiked, setLiked] = useState(false); // 좋아요가 눌렸는지 알려주는 useState
  
  // 좋아요 버튼 클릭 이벤트
  const onClickBtn = () => {
    if (!isLiked) {
      setLikeCnt(likeCnt + 1);
      setLiked((isLiked = true));
    } else {
      setLiked((isLiked = false));
      setLikeCnt(likeCnt - 1);
    }
  };

  return (
    <GoodBtnStyle Liked={isLiked} onClick={onClickBtn} hasBackground={Background}>
      <I.GoodBtnSvg color={!isLiked ? "#6B7187" : "#fff"} />
      <LikeCnt Liked={isLiked}>{likeCnt}</LikeCnt>
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
  `)}
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: ${(props) => (props.Liked ? "#434C9C" : (props.hasBackground ? "#fff" : "none"))}; // 좋아요 제어후에 배경을 가졌는지 추가로 제어
`;

const LikeCnt = styled.span<GoodBtnStyleElemProps>`
  display: block;
  margin-left: 4px;
  color: ${(props) => (props.Liked ? "#fff" : "#6B7187")};
`;

export default GoodBtn;

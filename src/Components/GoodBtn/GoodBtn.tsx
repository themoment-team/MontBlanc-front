import React, { useState } from "react";
import * as I from "../../Asset/SVG";
import styled from "styled-components";

interface GoodBtnProps {
  Liked: boolean;
}

const GoodBtn: React.FC = () => {
  let [likeCnt, setLikeCnt] = useState(324);
  let [isLiked, setLiked] = useState(false);

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
    <GoodBtnStyle Liked={isLiked} onClick={onClickBtn}>
      <I.GoodBtnSvg color={!isLiked ? "#6B7187" : "#fff"} />
      <LikeCnt Liked={isLiked}>{likeCnt}</LikeCnt>
    </GoodBtnStyle>
  );
};

const GoodBtnStyle = styled.button<GoodBtnProps>`
  padding: 7px 15px;
  min-width: 67px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background-color: ${(props) => (props.Liked ? "#434C9C" : "#fff")};
`;

const LikeCnt = styled.span<GoodBtnProps>`
  display: block;
  margin-left: 4px;
  color: ${(props) => (props.Liked ? "#fff" : "#6B7187")};
`;

export default GoodBtn;

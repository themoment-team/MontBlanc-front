import React, { useState } from "react";
import * as I from "../../Asset/SVG";
import styled from "styled-components";

interface GoodBtnProps {
  Liked: boolean;
}

const GoodBtn: React.FC = () => {
  let [like_cnt, set_like_cnt] = useState(3);
  let [liked, set_liked] = useState(false);
  const onClickBtn = () => {
    if (!liked) {
      set_like_cnt(like_cnt + 1);
      set_liked((liked = true));
    } else {
      set_liked((liked = false));
      set_like_cnt(like_cnt - 1);
    }
  };
  return (
    <GoodBtnStyle Liked={liked} onClick={onClickBtn}>
      <I.GoodBtnSvg color={!liked ? "#6B7187" : "#fff"} />
      <LikeCnt Liked={liked}>{like_cnt}</LikeCnt>
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

import styled, { css } from "styled-components";
import { isLiked } from "./GoodBtnContainer";
interface GoodBtnStyleElemProps {
  Liked: isLiked;
  hasBackground: boolean;
}

export const GoodBtnStyle = styled.button<GoodBtnStyleElemProps>`
  ${(props) =>
    props.hasBackground
      ? css`
          padding: 7px 15px;
          min-width: 67px;
        `
      : css`
          padding: 0;
        `}
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: ${(props) =>
    props.Liked && props.hasBackground
      ? "#434C9C"
      : props.hasBackground
      ? "#fff"
      : "none"}; // 좋아요 제어후에 배경을 가졌는지 추가로 제어
`;

export const LikeCnt = styled.span<GoodBtnStyleElemProps>`
  display: block;
  margin-left: 4px;
  color: ${(props) =>
    props.Liked && props.hasBackground ? "#fff" : "#6B7187"};
  padding-left: 5px;
`;

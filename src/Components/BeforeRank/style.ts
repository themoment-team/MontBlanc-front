import styled, { css } from "styled-components";
import device from "Shared/Config";

export const BeforeRankPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 115px 5vw 0 5vw;
  width: 90vw;

  @media ${device.laptop} {
    margin: 180px 10px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
    margin-left: 5vw;
    height: 180vh;
    justify-content: flex-start;
  }
`;

export const RightBox = styled.div`
  width: 990px;
  margin-top: 90px;
  @media ${device.mobile} {
    margin-top: 30px;
    width: 100%;
  }
`;

interface SvgProps {
  dropView: boolean;
}

export const SeasonSelect = styled.div<SvgProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #8b8b8b;
  align-items: flex-end;
  height: 57px;
  padding-bottom: 15px;
  color: #6a76e9;
  p {
    font-size: 40px;
    line-height: 57px;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-left: 36px;
    cursor: pointer;
    transition: 0.15s;
    ${(props) =>
      props.dropView &&
      css`
        transform: rotate(180deg);
        transition: 0.25s;
      `}
  }
`;

export const DropMenu = styled.div`
  position: absolute;
  z-index: 5;
  width: 200px;
  height: 310px;
  margin-top: -10px;
  overflow: scroll;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 7px 0 gray;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropItem = styled.div`
  background-color: #fff;
  width: 200px;
  height: 40px;
  display: flex;
  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;
  color: #676767;
  cursor: pointer;
  &:hover {
    background-color: #f1f3f5;
  }
`;

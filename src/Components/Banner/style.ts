import styled from "styled-components";
import device from "Shared/Config";

export const BannerBox = styled.div`
  width: 100vw;
  height: 150px;
  position: relative;
  top: 100px;
  overflow: hidden;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Banner = styled.div`
  width: fit-content;
  height: 120px;
  display: flex;
`;

export const InvisibleCheck = styled.div`
  height: 22px;
  background: #6a76e9;
  padding: 4px 0px;
`;

export const CheckButton = styled.div`
  width: 150px;
  position: absolute;
  right: 20px;
  :hover{
    cursor: pointer;
  }
`;

export const Explain = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const CheckBox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #6a76e9;
  border: 1px white solid;
  border-radius: 3px;
  position: relative;
  top: 3px;
  left: 5px;
`;
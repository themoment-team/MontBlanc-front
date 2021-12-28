import styled from "styled-components";
import device from "Shared/Config";

export const BannerBox = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  top: 100px;
  margin: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

export const InvisibleCheck = styled.div`
  height: 16px;
  background: #6a76e9;
  padding: 7px 0px;
`;

export const CheckButton = styled.div`
  width: 150px;
  position: absolute;
  right: 20px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  :hover{
    cursor: pointer;
  }
`;
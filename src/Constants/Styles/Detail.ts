import styled from "styled-components";
import device from "Constants/constants";

export const ApiResult = styled.h1`
  margin-top: 150px;
  text-align: center;
  color: #434c9c;
`;

export const LeftBox = styled.div`
  position: sticky;
  top: 180px;
  left: 0;
  height: 380px;
  width: 45%;
  margin-right: 30px;
  @media ${device.mobile} {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    position: initial;
  }
`;

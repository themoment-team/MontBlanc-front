import device from "Constants/constants";
import styled from "styled-components";

export const Positioner = styled.div`
  height: fit-content;
  position: sticky;
  top: 180px;
  margin-right: 30px;
  @media ${device.mobile} {
    position: initial;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  width: 435px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 19px 23px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  background-color: #6a76e9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  @media ${device.mobile} {
    width: 100%;
  }
  svg {
    padding-left: 5px;
  }
  & > button {
    background-color: #6a76e9;
    color: white;
    font-weight: 700;
    font-size: 16px;
    width: 324px;
    text-align: left;
    padding: 0;
  }
`;

export const LinkTextWrapper = styled.div`
  color: white;
  text-decoration: #fff 1px underline;
  padding-top: 3%;
  font-size: 12px;
  font-weight: 600;
`;

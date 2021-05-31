import styled from "styled-components";
import device from "Constants/reactive";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 70vw;
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
  }
`;

export const LeftBox = styled.div`
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
  width: 324px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 19px 23px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background-color: #434c9c;
  @media ${device.mobile} {
    width: 100%;
  }
  a {
    align-self: center;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-decoration: underline;
  }
  svg {
    padding-left: 5px;
  }
`;

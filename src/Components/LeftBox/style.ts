import device from "Constants/constants";
import styled, { css } from "styled-components";

interface submitBtn {
  Length: number;
}

export const Positioner = styled.div`
  height: fit-content;
  position: sticky;
  top: 180px;
  @media ${device.mobile} {
    position: initial;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const Form = styled.div`
  width: 328px;
  height: 179px;
  background-color: #ffffff;
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  textarea {
    margin: 29px 31px 5px 29px;
    height: 179px;
    font-family: "Noto Sans CJK KR";
    font-size: 16px;
    font-weight: 700;
    resize: none;
    border: none;
    outline: none;
  }
  textarea::placeholder {
    color: #a8a8a8;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 280px;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const FormBtn = styled.button<submitBtn>`
  align-self: flex-end;
  justify-self: flex-end;
  color: #fff;
  ${(props) =>
    props.Length >= 8
      ? css`
          background: rgba(67, 76, 156, 0.56);
        `
      : css`
          background: rgba(169, 176, 233, 0.56);
          cursor: not-allowed;
        `};
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  margin-bottom: 17px;
`;

export const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 44vw;
  @media screen and (max-width: 1300px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    & > div:nth-child(n + 3) {
      margin-left: 0px;
    }
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

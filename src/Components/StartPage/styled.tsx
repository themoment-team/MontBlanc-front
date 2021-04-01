import styled, { keyframes } from "styled-components";

export const StartPage = styled.div`
  display: flex;
`;

export const LeftBox = styled.div`
  margin: 24vh 9vw 0 7.5vw;
`;

export const StartHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25.5vh;
  color: #434c9c;
`;

export const Logo = styled.div`
  svg {
    width: 346px;
    height: 80px;
  }
`;

export const H1 = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin: 28px 0 13px;
`;

export const H2 = styled.div`
  font-weight: 400;
  font-size: 20px;
`;

export const ButtonBox = styled.div`
  button {
    background-color: #434c9c;
    color: #ffffff;
    padding: 20px 45px;
    border-radius: 12px;
    outline: 0;
    border: 0;
    font-weight: 600;
    font-size: 24px;
    margin-right: 23px;
  }
`;

export const RightBox = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const slide = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -800px;
  }
`;

export const ImgBox = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  & svg:nth-child(1) {
    animation: ${slide} 10s infinite linear alternate;
  }
  & svg:nth-child(2) {
    animation: ${slide} 10s infinite linear alternate-reverse;
  }
  & svg:nth-child(3) {
    animation: ${slide} 10s infinite linear alternate;
  }
  svg {
    display: block;
    float: right;
  }
`;

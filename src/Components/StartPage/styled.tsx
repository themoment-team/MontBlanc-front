import styled from "styled-components";

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
  svg {
    position: relative;
    top: -10px;
    height: 100vh;
  }
`;

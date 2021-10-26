import styled from "styled-components";
import device from "Constants/reactive";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #676767;
  margin-top: 17vh;
  text-align: center;
  justify-content: space-between;

  svg {
    width: 100%;
    max-width: 680px;
  }
  h1 {
    margin: 50px 0 0;
  }
  p {
    margin: 0;
    margin-bottom: 50px;
    font-size: 20px;
    text-align: center;
    margin: 30px 0 60px;
  }

  a {
    padding: 20px 30px;
    background-color: #6a76e9;
    border-radius: 20px;
    color: #ffffffff;
  }

  @media ${device.mobile} {
    padding: 0 20px;
    p {
      margin: 20px 0;
      font-size: 16px;
    }
  }
`;

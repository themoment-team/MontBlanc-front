import styled from "styled-components";
import device from "Constants/reactive";

export const ErrorWrapper = styled.div`
  margin: 180px 0 0;
  text-align: center;
  color: #676767;
  padding: 0 30px 30px;

  svg {
    width: 100%;
    max-width: 680px;
  }
  h1 {
    margin: 30px 0 0;
  }
  p {
    margin: 0;
    font-size: 20px;
    padding: 20px 0 100px;

    @media ${device.mobile} {
      padding: 20px 0 50px;
      font-size: 16px;
    }
  }

  a {
    padding: 20px 30px;
    background-color: #6a76e9;
    border-radius: 20px;
    color: #ffffffff;
  }

  @media ${device.mobile} {
    margin: 100px 0 0;
  }
`;

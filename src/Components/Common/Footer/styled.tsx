import styled from "@emotion/styled";
import device from "Constants/reactive";

export const Footer = styled.div`
  margin: 70px 15%;
  border-top: 1px solid #434c9c;
  svg {
    margin-top: 40px;
  }
  @media ${device.mobile} {
    width: 90vw;
    margin: 70px 5vw;
  }
`;

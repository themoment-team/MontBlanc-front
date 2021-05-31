import styled from "styled-components";
import device from "Constants/reactive";

export const AboutBox = styled.div`
  margin: 180px auto;
  width: 70vw;
  color: #434c9c;
  li {
    cursor: text;
  }
  @media ${device.mobile} {
    width: 90vw;
  }
`;

export const AboutHeading = styled.h2`
  margin-bottom: 30px;
`;

export const AboutContent = styled.div`
  font-weight: 600;
  line-height: 36.4px;
  margin-bottom: 40px;
  @media ${device.mobile} {
    width: 90vw;
    margin-right: 0;
  }
`;

export const Hr = styled.hr`
  margin: 70px 55% 70px 0;
  width: 692px;
  border: 1px solid #434c9c;
  transform: scaleY(0.5);
  @media ${device.laptop} {
    width: 100%;
  }
`;

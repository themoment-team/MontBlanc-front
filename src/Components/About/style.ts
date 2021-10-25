import styled from "styled-components";
import device from "Constants/reactive";

export const AboutBox = styled.div`
  margin: 180px auto;
  width: 70vw;
  color: #6A76E9;
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
  margin-bottom: 40px;
  p{
    margin-top: 20px;
  }
  li {
    margin-left: -1.3rem;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
    b {
      display: block;
      font-weight: 900;
    }
  }
  @media ${device.mobile} {
    width: 90vw;
    margin-right: 0;
  }
`;

export const Hr = styled.hr`
  margin: 70px 55% 70px 0;
  width: 692px;
  border: 1px solid #6A76E9;
  transform: scaleY(0.5);
  @media ${device.laptop} {
    width: 100%;
  }
`;

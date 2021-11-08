import styled from "styled-components";
import device from "Constants/constants";

interface ImprovementProps {
  color: string;
}

export const ImprovementBox = styled.div<ImprovementProps>`
  background-color: ${(props) => props.color};
  width: 35vw;
  height: 350px;
  border-radius: 12px;
  padding: 3em;
  margin-bottom: 33px;
  @media ${device.laptop} {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3em 7% 2em 7%;
  }
  @media ${device.mobile} {
    padding: 0;
  }
`;

export const ImprovementContentBox = styled.div`
  @media ${device.laptop} {
    padding: 3em 7% 2em 7%;
  }
`;

export const ImprovementContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  @media ${device.mobile} {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ImprovementHeading = styled.h2`
  color: white;
`;

export const AboutBtn = styled.div`
  & > button {
    color: white;
    background-color: #92929235;
    width: 10em;
  }
`;

export const ImprovementImg = styled.div`
  float: right;
  margin-top: 50px;
  @media ${device.laptop} {
    margin-top: 50px;
    svg {
      width: 100%;
    }
  }
`;

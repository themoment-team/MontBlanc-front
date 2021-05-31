import styled from "styled-components";
import device from "Constants/reactive";

interface IssueBoxProps {
  color: string;
}

export const IssueBoxStyle = styled.div<IssueBoxProps>`
  background-color: ${(props) => props.color};
  border-radius: 12px;
  width: 10vw;
  min-width: 130px;
  padding: 18px 23px;
  @media ${device.laptop} {
    width: 18vw;
  }
  @media ${device.tablet} {
    width: 100%;
    min-width: 15vw;
  }
  @media ${device.mobile} {
    width: 90%;
    padding: 18px 5%;
  }
`;

export const IssueBoxHeading = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const IssueNumber = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-left: 13px;
`;

export const Issue = styled.div`
  font-size: 15px;
  margin-bottom: 22px;
`;

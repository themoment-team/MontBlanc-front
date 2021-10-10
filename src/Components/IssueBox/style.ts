import styled from "styled-components";
import device from "Constants/reactive";

interface IssueBoxProps {
  color: string;
}

export const IssueBoxStyle = styled.div<IssueBoxProps>`
  background-color: ${(props) => props.color};
  border-radius: 12px;
  padding: 18px 23px 26px 23px;
  width: 80%;
  & + div {
    margin-top: 23px;
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
  text-align: left;
  word-break: break-all;
`;

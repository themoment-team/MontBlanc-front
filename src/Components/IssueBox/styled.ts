import styled from "styled-components";

interface IssueBoxProps {
  color: string;
}

export const IssueBoxStyle = styled.div<IssueBoxProps>`
  background-color: ${(props) => props.color};
  border-radius: 12px;
  width: 12vw;
  padding: 18px 27px;
`;

export const IssueBoxHeading = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

export const IssueNumber = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-left: 13px;
`;

export const Issue = styled.div`
  font-size: 15px;
  margin-bottom: 22px;
  text-align: left;
`;

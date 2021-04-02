import styled, { css } from "styled-components";

interface IssueBoxProps {
  color: string;
}

export const IssueBoxStyle = styled.div<IssueBoxProps>`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  width: 300px;
  padding: 18px 27px;
  margin-bottom: 29px;
`;

export const IssueBoxHeading = styled.div`
  display: flex;
  margin: 12px 0;
`;

export const IssueNumber = styled.div`
  font-weight: 700;
  margin-left: 13px;
`;

export const Issue = styled.span`
  font-size: 15px;
`;

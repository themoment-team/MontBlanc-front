import styled from "styled-components";

interface IssueBoxProps {
  color: string;
}

export const IssueBoxStyle = styled.div<IssueBoxProps>`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  max-width: 246px;
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

export const Issue = styled.div`
  font-size: 15px;
  margin-bottom: 22px;
`;

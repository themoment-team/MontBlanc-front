import styled from "styled-components";
import device from "Shared/Config";

export const LeaveCommentsBox = styled.main`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 110px auto 10px;
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 180px;
  }
`;

export const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1680px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1355px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1090px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const IssueBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-left: 20px;
  @media ${device.mobile} {
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

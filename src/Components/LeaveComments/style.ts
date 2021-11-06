import styled from "styled-components";
import device from "Constants/constants";

export const LeaveCommentsBox = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 88.5vw;
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 180px;
    align-items: center;
    width: 90vw;
  }
`;

export const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 44vw;
  @media screen and (max-width: 1300px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    & > div:nth-child(n + 3) {
      margin-left: 0px;
    }
  }
`;

export const IssueBoxWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 23px;
  @media ${device.mobile && device.tablet} {
    & + div {
      margin-top: 23px;
    }
    padding-left: 0;
  }
`;

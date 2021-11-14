import styled from "styled-components";
import device from "Shared/Config";

export const TopTenWrapper = styled.section`
  display: flex;
  width: 90vw;
  margin: 180px auto;
  height: fit-content;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
    margin-left: 5vw;
  }
`;

export const RightBox = styled.section`
  width: 54.2%;
  height: fit-content;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const TenIssues = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: fit-content;
  border-radius: 12px;
  background: #e8e8ff;
  padding: 20px;
  word-break: break-all;
  & + div {
    margin-top: 23px;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
  &:nth-child(-n + 3) {
    background: #c3e2ff;
  }
  & > span:nth-child(1) > span {
    margin-right: 20px;
    color: #6b7187;
    font-weight: 700;
  }
  & > span:nth-child(1) > article {
    float: right;
    width: 18vw;
    @media ${device.laptop} {
      width: 28vw;
    }
    @media ${device.mobile} {
      width: 70vw;
    }
    @media (max-width: 470px) {
      width: 62vw;
    }
    height: fit-content;
    color: #3b3e57;
    font-weight: 700;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
      align-self: flex-end;
      margin-top: 10px;
    }
  }
  & > span:nth-child(2) button:nth-child(1) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 81px;
    height: 30px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: -1px;
    text-align: left;
    & + button {
      justify-content: initial;
      margin-left: 54px;
      width: 48px;
      @media ${device.mobile} {
        width: 60px;
        margin-left: 20%;
      }
    }
  }
  ${device.mobile} {
    margin-top: 23px;
  }
`;

export const NoAnswerBtn = styled.button`
  background-color: #92929223;
`;

export const HasAnswerBtn = styled.button`
  button {
    background-color: #6a76e9;
  }
`;

export const LinkCommentPageBtn = styled.button`
  background-color: #6a76e9;
  color: #fff;
  padding: 26px 31px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 440px;
  margin-top: 24px;
  border-radius: 10px;
  span {
    padding-right: 9px;
    font-size: 16px;
  }
  @media ${device.tablet} {
    width: 280px;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
  }
  @media ${device.mobile} {
    width: 100%;
    flex-direction: row;
  }
`;

export const LinkWrapper = styled.div`
  color: white;
  text-decoration: #fff 1px underline;
  padding-top: 3%;
  font-size: 12px;
  font-weight: 600;
`;

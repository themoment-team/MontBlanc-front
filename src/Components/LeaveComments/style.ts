import styled, { css } from "styled-components";
import device from "Constants/reactive";

interface submitBtn {
  Length: number;
}

export const LeaveCommentsBox = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 70vw;
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 180px;
    align-items: center;
    width: 90vw;
  }
`;

export const LeftBox = styled.div`
  position: sticky;
  top: 180px;
  left: 0;
  height: 380px;
  margin-right: 30px;
  @media ${device.mobile} {
    position: relative;
    top: 0px;
    height: auto;
    margin-bottom: 30px;
    margin-right: 0;
    width: 100%;
  }
`;

export const H1 = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #434c9c;
  margin-bottom: 65px;
`;

export const Form = styled.div`
  width: 328px;
  height: 179px;
  background-color: #ffffff;
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  textarea {
    margin: 29px 31px 5px 29px;
    height: 179px;
    font-family: "Noto Sans CJK KR";
    font-size: 16px;
    font-weight: 700;
    resize: none;
    border: none;
    outline: none;
  }
  textarea::placeholder {
    color: #a8a8a8;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 280px;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Btn = styled.button<submitBtn>`
  align-self: flex-end;
  justify-self: flex-end;
  color: #fff;
  ${(props) =>
    props.Length >= 8
      ? css`
          background: rgba(67, 76, 156, 0.56);
        `
      : css`
          background: rgba(169, 176, 233, 0.56);
          cursor: not-allowed;
        `};
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  margin-bottom: 17px;
`;

export const Top10Btn = styled.button`
  background-color: #434c9c;
  color: #fff;
  padding: 26px 31px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 328px;
  margin-top: 24px;
  border-radius: 10px;
  span {
    padding-right: 9px;
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

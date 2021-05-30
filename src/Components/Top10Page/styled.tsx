import styled from "styled-components";

export const TopTenWrapper = styled.section`
  display: flex;
  width: 70vw;
  margin: 180px auto;
  height: fit-content;
`; // left박스와 right박스 전체를 감싸는 wrapper입니다.

export const RightBox = styled.section`
  width: 54.2%;
  height: fit-content;
`;
// topten 리스트가 적히는 오른쪽 박스입니다.

export const TenIssues = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: fit-content;
  border-radius: 12px;
  background: #e7f2f1;
  padding: 20px;
  &:nth-child(-n + 3) {
    // 3위까지는 특별한 색상을 가지게 됩니다!
    background: #dce8f7;
  }
  & + & {
    margin-top: 20px;
  } // 이 컴포넌트와 이웃해있을때 margin으로 띄어주는 코드입니다.
  & > span:nth-child(1) > span {
    margin-right: 20px;
    color: #6b7187;
    font-weight: 700;
  }
  & > span:nth-child(1) > article {
    float: right;
    width: calc(100% - 42px);
    height: fit-content;
    color: #3b3e57;
    font-weight: 700;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span:nth-child(2) > button:nth-child(1) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #92929223;
    width: 81px;
    height: 30px;
    margin-left: 22px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: -1px;
    text-align: left;
    & + button {
      margin-left: 54px;
    }
  }
`;

export const Btn = styled.button`
  margin-top: 50px;
  background-color: #434c9c;
  a {
    color: white;
  }
`;

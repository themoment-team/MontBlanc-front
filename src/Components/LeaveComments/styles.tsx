import styled from "styled-components";

export const LeaveCommentsBox = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 215px 9.5%;
  width: 80.4%;
`;

export const LeftBox = styled.div`
  position: sticky;
  top: 215px;
  left: 0;
  height: 380px;
`;

export const H1 = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #434c9c;
  margin-bottom: 65px;
`;

export const Form = styled.div`
  width: 440px;
  height: 240px;
  background-color: #ffffff;
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  textarea {
    margin: 40px 42px 0 42px;
    height: 130px;
    font-size: 18px;
    font-weight: 700;
    resize: none;
    border: none;
    outline: none;
  }
  textarea::placeholder {
    color: #a8a8a8;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  align-self: flex-end;
  justify-self: flex-end;
  color: #fff;
  background: rgba(67, 76, 156, 0.56);
  padding: 10px 29px;
  font-size: 17px;
  font-weight: 600;
  margin-right: 27px;
`;

export const Top10Btn = styled.button`
  background-color: #434c9c;
  color: #fff;
  padding: 26px 31px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 440px;
  margin-top: 24px;
  border-radius: 10px;
  a {
    color: white;
    text-decoration: #fff 1px underline;
    padding-top: 13px;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    padding-right: 9px;
  }
`;

export const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px
`;

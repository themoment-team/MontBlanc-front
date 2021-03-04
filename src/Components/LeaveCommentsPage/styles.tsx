import styled from "styled-components";

export const LeaveComment = styled.div``;

export const LeftBox = styled.div`
  margin: 70px 0 0 200px;
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
  }
`;

export const Btn = styled.button`
  align-self: flex-end;
  justify-self: flex-end;
  color: #fff;
  background-color: #434c9c;
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

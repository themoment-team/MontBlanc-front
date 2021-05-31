import styled from "styled-components";
import device from "Constants/reactive";

export const ModalWrapper = styled.div`
  padding: 30px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    align-self: flex-end;
  }
  position: relative;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #5b5b5b;
  margin-bottom: 35px;
  margin-top: 14px;
`;

export const ModalImg = styled.button`
  background: none;
  padding: 0;
  position: absolute;
  top: 30px;
`;

export const InputBox = styled.input`
  background-color: #f4f4f4;
  color: #a6a6a6;
  font-size: 18px;
  padding: 17px;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 95%;
`;

export const TextArea = styled.textarea`
  background-color: #f4f4f4;
  color: #a6a6a6;
  font-size: 18px;
  font-weight: 400;
  padding: 17px;
  border: none;
  outline: none;
  width: 95%;
  height: 280px;
  border-radius: 10px;
  resize: none;
  margin-top: 13px;
  &::placeholder {
    font-size: 18px;
  }
  @media ${device.mobile} {
    height: 85vw;
  }
`;

export const BtnWrapper = styled.div`
  width: 95%;
  float: right;
  margin-top: 20px;
`;

export const SaveBtn = styled.button`
  float: right;
  background-color: #434c9c;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-left: 17px;
`;

export const DeleteBtn = styled.button`
  float: right;
  background-color: #c6c6c6;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

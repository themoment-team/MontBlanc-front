import styled from "styled-components";

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

export const Input = styled.input`
  background-color: #f4f4f4;
  color: #a6a6a6;
  font-size: 18px;
  font-weight: 400;
  padding: 17px;
  border: none;
  outline: none;
  width: 900px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const TextArea = styled.textarea`
  background-color: #f4f4f4;
  color: #a6a6a6;
  font-size: 18px;
  font-weight: 400;
  padding: 17px;
  border: none;
  outline: none;
  width: 900px;
  height: 323px;
  border-radius: 10px;
  resize: none;
`;

export const SaveBtn = styled.button`
  background-color: #434c9c;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  justify-self: flex-end;
  margin: 11px 0;
`;

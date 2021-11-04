// import { Modal } from 'react-modal';
import styled from "styled-components";
import device from "Constants/constants";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 91px 137px 81px 136px;
`;

export const H1 = styled.h1`
  color: #6A76E9;
  font-size: 22px;
  margin: 70.06px 0 62px 0;
`;

export const Input = styled.input`
  border: none;
  border-bottom: solid 1px #6A76E9;
  width: 350px;
  padding: 10px 0 10px 5px;
  margin-bottom: 36px;
  background-color: #fff;
  outline: none;
  font-size: 15px;
  color: black;

`;

export const LoginBtn = styled.button`
  width: 355px;
  padding: 14px 138px;
  background-color: #6A76E9;
  color: #fff;
  font-size: 14px;
  margin-top: 39px;
  @media ${device.tablet} {
    /* width: 100%; */
    padding: 14px 10%;
  }
`;

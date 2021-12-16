import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  background-color: #fff;
  border-radius: 25px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SeasonTopInfo = styled.div`
  margin-top: 45px;
  margin-left: 50px;
  p {
    margin: 0;
    color: #b6bdff;
    font-weight: 700;
    font-size: 24px;
  }
  span {
    margin: 0;
    font-size: 30px;
    font-weight: 800;
    color: #6a76e9;
  }
`;

export const Title = styled.h1`
  color: #555;
  font-size: 28px;
  font-weight: 800;
  margin-left: 50px;
  margin-top: 50px;
`;

export const Content = styled.p`
  width: 500px;
  color: #8f8f8f;
  font-size: 18px;
  font-weight: 600;
  margin-left: 50px;
  margin-top: 30px;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  border: 1px solid red;
`;

export const Btn = styled.button`
  background-color: #929292;
`;

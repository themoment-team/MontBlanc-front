import styled from "styled-components";
import device from "Constants/reactive";

export const ModalWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4.5fr;
  padding: 89px 67px 70px 70px;
  @media ${device.mobile} {
    grid-template-rows: 1fr 7.5fr;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #555555;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  color: #8f8f8f;
  font-size: 18px;
  font-weight: 600;
`;

export const GridDivider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ViewImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ModalImg = styled.button`
  background: none;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
`;

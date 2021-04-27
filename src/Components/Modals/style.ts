import styled from "styled-components";

interface InnerProps {
  width: number;
  height: number;
}

export const Container = styled.div`
  background-color: #36363666;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Inner = styled.div<InnerProps>`
  background-color: #fff;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  z-index: 5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button {
    align-items: flex-end;
  }
`;

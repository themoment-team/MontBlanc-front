import React, { useEffect } from "react";
import styled from "styled-components";
import { ModalProps } from "../../Context/Modal";

export const ModalContainer: React.FC<ModalProps> = ({ close, children }) => {
    useEffect(() => {
      const closeModal = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };
  
      window.addEventListener("keydown", closeModal);
  
      return () => {
        window.removeEventListener("keydown", closeModal);
      };
    }, []);
  
    return (
      <Container
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
          <div className="header">
            <button onClick={close}>
              x
            </button>
          </div>
          {children}
      </Container>
    );
};

const Container = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  
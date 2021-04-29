import React, { useEffect } from "react";
import * as S from "./style";
import { ModalProps } from "../../Context/Modal";

interface ModalContainerProps extends ModalProps {
  width: number;
  height: number;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  close,
  width,
  height,
}) => {
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
  }, [close]);

  return (
    <>
      <S.Container
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      ></S.Container>
      <S.Inner width={width} height={height}>
        {children}
      </S.Inner>
    </>
  );
};

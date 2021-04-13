import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ModalProps } from "../../Context/Modal";
import { ModalContainer } from "./ModalContainer"

export const LoginModal: React.FC<ModalProps> = ({
  close,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            disableBodyScroll(ref.current);
            return () => {
              enableBodyScroll(ref.current!);
            };
        }
    }, []);

    return (
        <ModalContainer close={close}>
          <Container ref={ref}>
          </Container>
        </ModalContainer>
    );
}

const Container = styled.div`
  width: 700px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
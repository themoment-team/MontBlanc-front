import React, { createContext, useState, useCallback, useContext } from "react";

import * as modals from "../Components/Modals";

/*
 * Context.. 를 써서 만든 모달..
 * 각각의 모달을 [../Components/Modals]에서 스타일링하고
    <button onClick={() => modal.open("{모달컴포넌트이름}", { {props} })}>
      프로젝트 상세 정보 보기
    </button>
 *  형식으로 사용하시면 됩니다.
*/

export interface ModalProps {
  close: () => void;
};

interface Modal {
  name: keyof typeof modals;
  props: {
    [key in string]: any;
  };
};

interface ModalContextValues {
  open: <T extends Modal["name"]>(
    name: T,
    props: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >
  ) => void;
};

const ModalContext = createContext<ModalContextValues | null>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<Modal | null>(null);

  const open: ModalContextValues["open"] = useCallback((name, props) => {
    setOpenedModal({ name, props });
  }, []);

  const close = useCallback(() => {
    setOpenedModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {openedModal && <ModalRenderer close={close} modal={openedModal} />}
    </ModalContext.Provider>
  );
};

const ModalRenderer: React.FC<ModalProps & { modal: Modal }> = ({
  close,
  modal,
}) => {
  const Modal = modals[modal.name];
  return <Modal close={close} {...(modal.props as any)} />;
};

// Modal Context의 Value들을 사용할 수 있는 hook

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("context must be provided");
  }

  return context;
};
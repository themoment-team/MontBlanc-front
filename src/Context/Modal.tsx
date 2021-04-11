import React, { createContext, useState, useCallback, useContext } from "react";

import * as modals from "../Components/Modals";

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
import React, { createContext, useState, useCallback, useContext } from "react";
import * as modals from "../Components/Modals";

export type ModalProps = {
  close: () => void;
  state?: number;
  heading?: string;
};

type Modal = {
  name: keyof typeof modals;
  state?: {
    [key in number]: any;
  };
  heading?: {
    [key in string]: any;
  };
};

type ModalContextValues = {
  open: <T extends Modal["name"]>(
    name: T,
    state?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    heading?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >
  ) => void;
};

export const ModalContext = createContext<ModalContextValues | null>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<Modal | null>(null);

  const open: ModalContextValues["open"] = useCallback(
    (name, state, heading) => {
      setOpenedModal({ name, state, heading });
    },
    []
  );

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
  return (
    <Modal
      close={close}
      heading={modal.heading}
      state={modal.state}
      {...(modal.heading as any)}
    />
  );
};

// hook

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("context must be provided");
  }

  return context;
};

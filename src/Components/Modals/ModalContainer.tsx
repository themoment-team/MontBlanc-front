const ModalContainer = (
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return [openModal, closeModal];
};

export default ModalContainer;

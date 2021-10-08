import Modal from "react-modal";
import ModalContainer from "../ModalContainer";
import * as S from "./style";
import { Logo } from "../../../Asset/SVG";
import { useLogin, customStyles } from "./LoginModalContainer";
import { useState } from "react";

export const LoginModalPresenter: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [openModal, closeModal] = ModalContainer(setModalIsOpen);

  const [setId, setPass, TryLogin] = useLogin(closeModal);

  return (
    <>
      <button onClick={openModal}>Admin</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        style={customStyles}
      >
        <S.ModalWrapper>
          <Logo />
          <S.H1>Admin</S.H1>
          <S.Input
            id="id"
            type="mail"
            placeholder="이메일을 입력해주세요"
            onChange={({ target: { value } }) => setId(value)}
          />
          <S.Input
            id="pass"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={({ target: { value } }) => setPass(value)}
          />
          <S.LoginBtn
            onClick={() => {
              TryLogin("");
            }}
          >
            로그인하기
          </S.LoginBtn>
        </S.ModalWrapper>
      </Modal>
    </>
  );
};

export default LoginModalPresenter;

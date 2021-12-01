import Modal from "react-modal";
import ModalContainer from "../ModalContainer";
import * as S from "./style";
import { Logo } from "../../../Asset/SVG";
import { useState } from "react";
import admin from "Api/admin";
import { HasAdminToken } from "Atom";
import { Styles } from "react-modal";
import { useSetRecoilState } from "recoil";

const useLogin = (close: () => void) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const setLogged = useSetRecoilState(HasAdminToken);

  const TryLogin = async () => {
    try {
      const res = await admin.login(id, pass);
      localStorage.setItem("themoment_token", res.data.data.accessToken);
      localStorage.setItem(
        "themoment_token_refresh",
        res.data.data.refreshToken,
      );
      setLogged(true);
      alert("로그인에 성공하였습니다.");
      close();
    } catch (e) {
      const message = (e.message = "Error: Request failed with status code 404"
        ? "올바르지 않은 아이디 또는 비밀번호입니다."
        : "로그인 에러가 발생하였습니다. 개발팀에 문의해주세요. " + e);
      alert(message);
    }
  };

  return [setId, setPass, TryLogin];
};

const customStyles: Styles = {
  content: {
    width: "620px",
    height: "630px",
  },
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
};

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

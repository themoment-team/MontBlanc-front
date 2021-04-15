import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import { Logo } from "../../../../Asset/SVG";

export const LoginModal: React.FC<ModalProps> = ({ close }) => {
  return (
    <ModalContainer close={close} width={623} height={628}>
      <S.ModalWrapper>
        <Logo />
        <S.H1>Admin</S.H1>
        <S.Input type="email" placeholder="이메일을 입력해주세요" />
        <S.Input type="password" placeholder="비밀번호를 입력해주세요" />
        <S.LoginBtn>로그인하기</S.LoginBtn>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default LoginModal;

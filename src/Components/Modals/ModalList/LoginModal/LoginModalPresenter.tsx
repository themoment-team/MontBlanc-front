import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import { Logo } from "../../../../Asset/SVG";
import { useLogin } from "./LoginModalContainer";

export const LoginModalPresenter: React.FC<ModalProps> = ({ close }) => {
  const [setId, setPass, TryLogin] = useLogin();

  return (
    <ModalContainer close={close} width={623} height={628}>
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
            TryLogin("null");
          }}
        >
          로그인하기
        </S.LoginBtn>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default LoginModalPresenter;

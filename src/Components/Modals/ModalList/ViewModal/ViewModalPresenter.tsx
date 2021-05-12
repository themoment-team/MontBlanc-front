import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import * as I from "../../../../Asset/SVG";

const ViewModalPresenter: React.FC<ModalProps> = ({ close, idx }) => {
  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
        <S.ModalContent>
          <S.H1>heading</S.H1>
          <S.Text>content</S.Text>
        </S.ModalContent>
        <S.ViewImg>
          <I.ImprovmentSvg1 />
        </S.ViewImg>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

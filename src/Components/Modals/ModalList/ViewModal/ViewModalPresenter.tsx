import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import * as I from "../../../../Asset/SVG";

const ViewModalPresenter: React.FC<ModalProps> = ({ close }) => {
  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
        <S.ModalContent>
          <S.H1>전공동아리 시간이 너무 부족해요. 늘려주세요ㅠㅠ</S.H1>
          <S.Text>
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
          </S.Text>
        </S.ModalContent>
        <S.ViewImg>
          <I.ImprovmentSvg1 />
        </S.ViewImg>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

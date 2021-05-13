import { ModalContainer } from "../../ModalContainer";
import { ModalProps, useModal } from "../../../../Context/Modal";
import * as S from "./style";
import { EditBtn } from "../../../../Asset/SVG";
import * as I from "../../../../Asset/SVG";

const ViewModalPresenter: React.FC<ModalProps> = ({ close }) => {
  const modal = useModal();

  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
          <S.H1>heading</S.H1>
          <S.ModalImg onClick={() => modal.open("EditModal", 3, "", "수정하기")}>
            <EditBtn />
          </S.ModalImg>
          <S.GridDivider>
            <S.Text>contentdsfdsfdfasdfdsa
              asfsdafdsfsadfdsfsdfdsfsadfdsafas
              sadfsadfsdafsdfasdfsadfsdafdsaf
              asdfsdafsdfsdafsdafasdfasdfdfa
            </S.Text>
            <S.ViewImg>
              <I.ImprovmentSvg1 />
            </S.ViewImg>
          </S.GridDivider>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

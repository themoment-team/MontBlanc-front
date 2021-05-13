import { ModalContainer } from "../../ModalContainer";
import { ModalProps, useModal } from "../../../../Context/Modal";
import * as S from "./style";
import { EditBtn } from "../../../../Asset/SVG";
import * as I from "../../../../Asset/SVG";

const ViewModalPresenter: React.FC<ModalProps> = ({ close }) => {
  const modal = useModal();
  const randomNumber: number = Math.floor(Math.random() * 3) + 1;

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
            {
              { 
                1 : <I.ImprovmentSvg1/>,
                2 : <I.ImprovmentSvg2/>,
                3 : <I.ImprovmentSvg3/>
              }[randomNumber]
            }
            </S.ViewImg>
          </S.GridDivider>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

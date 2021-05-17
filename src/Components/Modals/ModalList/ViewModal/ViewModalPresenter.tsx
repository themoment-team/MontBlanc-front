import { ModalContainer } from "../../ModalContainer";
import { ModalProps, useModal } from "../../../../Context/Modal";
import * as S from "./style";
import { EditBtn } from "../../../../Asset/SVG";
import * as I from "../../../../Asset/SVG";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";

const ViewModalPresenter: React.FC<ModalProps> = ({ close, idx, state }) => {
  const modal = useModal();
  const randomNumber: number = Math.floor(Math.random() * 3) + 1;
  const logged = useRecoilValue(HasAdminToken);

  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
        <S.H1>heading</S.H1>
        {( logged &&
          <S.ModalImg
            onClick={() => modal.open("EditModal", idx || 0, state, "수정하기")}>
            <EditBtn />
          </S.ModalImg>
          )}
        <S.GridDivider>
          <S.Text>
            contentdsfdsfdfasdfdsa asfsdafdsfsadfdsfsdfdsfsadfdsafas
            sadfsadfsdafsdfasdfsadfsdafdsaf asdfsdafsdfsdafsdafasdfasdfdfa
          </S.Text>
          <S.ViewImg>
            {
              {
                1: <I.ImprovmentSvg1 />,
                2: <I.ImprovmentSvg2 />,
                3: <I.ImprovmentSvg3 />,
              }[randomNumber]
            }
          </S.ViewImg>
        </S.GridDivider>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

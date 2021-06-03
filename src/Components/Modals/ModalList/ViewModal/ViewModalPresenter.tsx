import { ModalContainer } from "../../ModalContainer";
import { ModalProps, useModal } from "../../../../Context/Modal";
import * as S from "./style";
import { EditBtn } from "../../../../Asset/SVG";
import * as I from "../../../../Asset/SVG";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";
import useGetModalValue from "./ViewModalContainer";

const ViewModalPresenter: React.FC<ModalProps> = ({
  close,
  idx,
  state,
  key,
}) => {
  const modal = useModal();
  const randomNumber: number = Math.floor(Math.random() * 2) + 1;
  const logged = useRecoilValue(HasAdminToken);
  const [Idx, title, content] = useGetModalValue(idx || key || 0, state || "");

  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
        <S.H1>{title}</S.H1>
        {logged && (
          <S.ModalImg
            onClick={() =>
              modal.open(
                "EditModal",
                Idx || 0,
                state,
                "수정하기",
                -1,
                content,
                title
              )
            }
          >
            <EditBtn />
          </S.ModalImg>
        )}
        <S.GridDivider>
          <S.Text>{content}</S.Text>
          <S.ViewImg>
            {
              {
                1: <I.ImprovmentSvg1 />,
                2: <I.ImprovmentSvg2 />,
              }[randomNumber]
            }
          </S.ViewImg>
        </S.GridDivider>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default ViewModalPresenter;

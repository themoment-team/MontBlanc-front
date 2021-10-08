import * as S from "./style";
import * as I from "../../../Asset/SVG";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";
import useGetModalValue from "./ViewModalContainer";
import { useState } from "react";
import ModalContainer from "../ModalContainer";
import { EditModal } from "..";
import ReactModal from "react-modal";

const ViewModalPresenter: React.FC<{
  idx: number;
  state: string;
  key?: number;
  buttonContent: string;
}> = ({ idx, state, key, buttonContent }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [openModal, closeModal] = ModalContainer(setModalIsOpen);

  const randomNumber: number = Math.floor(Math.random() * 2) + 1;
  const logged = useRecoilValue(HasAdminToken);
  const [Idx, title, content] = useGetModalValue(idx || key || 0, state || "");

  return (
    <>
      <button onClick={openModal}>{buttonContent}</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.H1>{title}</S.H1>
            {logged && (
              <EditModal
                idx={idx}
                state={state ?? ""}
                heading={"수정하기"}
                content={content}
                title={title}
                isComponents={true}
              />
            )}
          </S.ModalHeader>
          <S.GridDivider>
            <S.Text>
              {content?.split("\n").map((content: string) => {
                return (
                  <>
                    {content}
                    <br />
                  </>
                );
              })}
            </S.Text>
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
      </ReactModal>
    </>
  );
};

export default ViewModalPresenter;

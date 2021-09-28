import Modal from "react-modal";
import ModalContainer from "../ModalContainer";
import * as S from "./style";
import { CancleBtn } from "../../../Asset/SVG";
import { useStateDistinction, customStyle } from "./EditModalContainer";
import { useState } from "react";
import { EditBtn } from "../../../Asset/SVG";

interface ModalProps {
  idx: number;
  state: string;
  heading: string;
  content?: string;
  title?: string;
  ButtonContent?: string;
  isComponents?: boolean;
}

const EditModal: React.FC<ModalProps> = ({
  idx,
  state,
  heading,
  content,
  title,
  ButtonContent,
  isComponents,
}) => {
  const [setContent, setHeading, TryUpdate, TrySave, TryDelete] =
    useStateDistinction(idx || 0, state || "");

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [openModal, closeModal] = ModalContainer(setModalIsOpen);

  return (
    <>
      {isComponents ? (
        <S.EditBtn onClick={openModal}>
          <EditBtn />
        </S.EditBtn>
      ) : (
        <S.AboutBtn onClick={openModal}>{ButtonContent}</S.AboutBtn>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyle}
      >
        <S.ModalWrapper>
          <S.H1>{heading}</S.H1>
          <S.ModalImg onClick={closeModal}>
            <CancleBtn />
          </S.ModalImg>
          {title ? (
            <>
              <S.InputBox
                placeholder={title}
                onChange={({ target: { value } }) => setHeading(value)}
              />
              <S.TextArea
                placeholder={content}
                onChange={({ target: { value } }) => setContent(value)}
              />
            </>
          ) : (
            <>
              <S.InputBox
                placeholder="제목을 입력해주세요."
                onChange={({ target: { value } }) => setHeading(value)}
              />
              <S.TextArea
                placeholder="내용을 입력해주세요."
                onChange={({ target: { value } }) => setContent(value)}
              />
            </>
          )}
          <S.BtnWrapper onClick={closeModal}>
            {heading === "수정하기" && (
              <>
                <S.SaveBtn
                  onClick={() => {
                    TryUpdate("");
                  }}
                >
                  저 장
                </S.SaveBtn>
                <S.DeleteBtn
                  onClick={() => {
                    TryDelete("");
                  }}
                >
                  삭 제
                </S.DeleteBtn>
              </>
            )}
            {heading !== "수정하기" && (
              <S.SaveBtn
                onClick={() => {
                  TrySave("");
                }}
              >
                저 장
              </S.SaveBtn>
            )}
          </S.BtnWrapper>
        </S.ModalWrapper>
      </Modal>
    </>
  );
};

export default EditModal;

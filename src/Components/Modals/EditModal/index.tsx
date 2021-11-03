import Modal from "react-modal";
import ModalContainer from "../ModalContainer";
import * as S from "./style";
import { CancleBtn } from "../../../Asset/SVG";
import { useState } from "react";
import { EditBtn } from "../../../Asset/SVG";
import Answer from "Api/answer";
import Improvement from "Api/improvement";
import { Styles } from "react-modal";

const useStateDistinction = (heading: string, content: string, idx: number, state: string) => {
  let TryUpdate = () => {};
  let TrySave = () => {};
  let TryDelete = () => {};

  if (state === "answer") {
    TryUpdate = updateAnswer(idx, content);
    TrySave = saveAnswer(idx, content);
    TryDelete = deleteAnswer(idx);
  } else if (state === "improvement") {
    TryUpdate = updateImprovement(idx, content, heading);
    TrySave = saveImprovement(content, heading);
    TryDelete = deleteImprovement(idx);
  } else {
    alert("예상치 못한 에러입니다. 개발자측에 문의해주세요. state: " + state);
  }

  return [TryUpdate, TrySave, TryDelete];
};

const updateImprovement = (idx: number, content: string, heading: string) => {
  const tryUpdate = async () => {
    try {
      window.location.reload();
      return await Improvement.UpdateImprovement(idx, content, heading);
    } catch (e) {
      alert("실제개선사례 업데이트 오류 : " + e);
    }
  };
  return tryUpdate;
};

const saveImprovement = (content: string, heading: string) => {
  const trySave = async () => {
    try {
      await Improvement.saveImprovement(content, heading);
      window.location.reload();
    } catch (e) {
      alert("실제개선사례 작성 또는 수정 오류 : " + e);
    }
  };
  return trySave;
};

const deleteImprovement = (idx: number) => {
  const tryDelete = async () => {
    try {
      await Improvement.deleteImprovement(idx);
      window.location.reload();
    } catch (e) {
      alert("실제개선사례 삭제 오류 : " + e);
    }
  };
  return tryDelete;
};

const updateAnswer = (idx: number, content: string) => {
  const TryUpdateAndSave = async () => {
    try {
      await Answer.updateAnswer(content, idx);
      window.location.reload();
    } catch (e) {
      alert("답변 수정 오류 : " + e);
    }
  };

  return TryUpdateAndSave;
};

const saveAnswer = (idx: number, content: string) => {
  const TryUpdateAndSave = async () => {
    try {
      await Answer.saveAnswer(idx, content);
      window.location.reload();
    } catch (e) {
      alert("답변 저장 오류 : " + e);
    }
  };

  return TryUpdateAndSave;
};

const deleteAnswer = (idx: number) => {
  const TryDelete = async () => {
    try {
      await Answer.deleteAnswer(idx);
      window.location.reload();
    } catch (e) {
      alert("답변 삭제 오류 : " + e);
    }
  };

  return TryDelete;
};

export const customStyle: Styles = {
  content: {
    width: "1000px",
    height: "600px",
  },
};

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
  const [modalHeading, setHeading] = useState(heading || "");
  const [modalContent, setContent] = useState(content || "");
  const [TryUpdate, TrySave, TryDelete] =
    useStateDistinction(modalHeading, modalContent, idx || 0, state || "");

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
          <S.InputBox
            value={modalHeading}
            placeholder="제목을 입력해주세요."
            onChange={({ target: { value } }) => setHeading(value)}
          />
          <S.TextArea
            value={modalContent}
            placeholder="내용을 입력해주세요."
            onChange={({ target: { value } }) => setContent(value)}
          />
          <S.BtnWrapper onClick={closeModal}>
            {heading === "수정하기" && (
              <>
                <S.SaveBtn
                  onClick={() => {
                    TryUpdate();
                  }}
                >
                  저 장
                </S.SaveBtn>
                <S.DeleteBtn
                  onClick={() => {
                    TryDelete();
                  }}
                >
                  삭 제
                </S.DeleteBtn>
              </>
            )}
            {heading !== "수정하기" && (
              <S.SaveBtn
                onClick={() => {
                  TrySave();
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

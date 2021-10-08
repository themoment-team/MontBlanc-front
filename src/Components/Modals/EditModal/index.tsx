import Modal from "react-modal";
import ModalContainer from "../ModalContainer";
import * as S from "./style";
import { CancleBtn } from "../../../Asset/SVG";
import { useState } from "react";
import { EditBtn } from "../../../Asset/SVG";
import Answer from "Api/answer";
import Improvement from "Api/improvement";
import { Styles } from "react-modal";

interface list {
  boardIdx: number;
  content: string;
}

const useStateDistinction = (idx: number, state: string) => {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  let TryUpdate = () => {};
  let TrySave = () => {};
  let TryDelete = () => {};

  if (state === "answer") {
    TryUpdate = updateAndSaveAnswer(idx, "Update", content);
    TrySave = updateAndSaveAnswer(idx, "Save", content);
    TryDelete = deleteAnswer(idx);
  } else if (state === "improvment") {
    TryUpdate = updateImprovement(idx, content, heading);
    TrySave = saveImprovement(content, heading);
    TryDelete = deleteImprovement(idx);
  } else {
    alert("예상치 못한 에러입니다. 개발자측에 문의해주세요. state: " + state);
  }

  return [setContent, setHeading, TryUpdate, TrySave, TryDelete];
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
      await Improvement.saveImprovment(content, heading);
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

const updateAndSaveAnswer = (idx: number, state: string, content: string) => {
  const TryUpdateAndSave = async () => {
    const method = state === "Update" ? "PUT" : "POST";
    try {
      await Answer.updateAndSaveAnswer(content, idx, method);
      window.location.reload();
    } catch (e) {
      alert("답변 저장 또는 수정 오류 : " + e);
    }
  };

  return TryUpdateAndSave;
};

const deleteAnswer = (idx: number) => {
  const TryDelete = async () => {
    try {
      window.location.reload();
      await Answer.delete(idx);
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
          <S.InputBox
            value={title}
            placeholder="제목을 입력해주세요."
            onChange={({ target: { value } }) => setHeading(value)}
          />
          <S.TextArea
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={({ target: { value } }) => setContent(value)}
          />
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

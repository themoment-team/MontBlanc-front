import * as S from "./style";
import * as I from "../../../Asset/SVG";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";
import ModalContainer from "../ModalContainer";
import { EditModal } from "..";
import ReactModal from "react-modal";
import answer from "Api/answer";
import improvement from "Api/improvement";
import { useState, useEffect } from "react";

const useGetModalValue = (idx: number, state: string) => {
  const [Idx, title, content] =
    state === "improvment"
      ? GetImprovmentValue(idx || 0)
      : GetAnswerValue(idx || 0);

  return [Idx, title, content];
};

const GetAnswerValue = (idx: number) => {
  const [Idx, setIdx] = useState("");
  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const tryGet = async () => {
    try {
      const res = await answer.getAnswer(idx);
      return res.data;
    } catch (e) {
      alert("에러가 발생하였습니다. 개발팀에 문의해주세요. " + e);
    }
  };

  useEffect(() => {
    tryGet().then((res) => {
      setIdx(res.data.answerIdx);
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, []);

  return [Idx, title, Content];
};

const GetImprovmentValue = (idx: number) => {
  const [Idx, setIdx] = useState("");
  const [improveHeader, setImproveHeader] = useState("");
  const [improveContent, setImproveContent] = useState("");
  const idxCopy = idx.toString();

  const tryGet = async () => {
    try {
      const res = await improvement.viewImprovment();

      return await res.data.list.filter(
        (data: { improveIdx: string }) => data.improveIdx === idxCopy
      );
    } catch (e) {
      alert("에러가 발생하였습니다. 개발팀에 문의해주세요. " + e);
    }
  };

  useEffect(() => {
    tryGet().then((res) => {
      setIdx(res[0].improveIdx);
      setImproveHeader(res[0].title);
      setImproveContent(res[0].content);
    });
  }, []);

  return [Idx, improveHeader, improveContent];
};

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

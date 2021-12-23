import ModalContainer from "../ModalContainer";
import ReactModal from "react-modal";
import * as S from "./style";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { HasAdminToken } from "Atom";

const BeforeRankModal: React.FC<{}> = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [openModal, closeModal] = ModalContainer(setModalIsOpen);

  const logged = useRecoilValue(HasAdminToken);

  return (
    <>
      <button onClick={openModal}></button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <S.ModalWrapper>
          <S.SeasonTopInfo>
            <p>2021년 8월 </p>
            <p>학교가 불편한 순간</p>
            <p>SEASON 1</p>
            <span>TOP 1</span>
          </S.SeasonTopInfo>
          <S.Title>전공동아리 시간이 너무 부족해요. 늘려주세요 ㅠㅠ</S.Title>
          <S.Content>
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리전공동아리전공동아리전공동아리
            전공동아리전공동아리전공동아리
          </S.Content>
          <S.BtnWrapper>
            <S.Btn>답변달기</S.Btn>
          </S.BtnWrapper>
        </S.ModalWrapper>
      </ReactModal>
    </>
  );
};

export default BeforeRankModal;

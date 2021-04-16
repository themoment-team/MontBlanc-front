import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import { CancleBtn } from "../../../../Asset/SVG";

const LeaveCommentModal: React.FC<ModalProps> = ({ close }) => {
  return (
    <ModalContainer close={close} width={1000} height={600}>
      <S.ModalWrapper>
        <S.H1>답변 달기</S.H1>
        <S.ModalImg>
          <CancleBtn />
        </S.ModalImg>
        <S.Input placeholder="제목을 입력해주세요." />
        <S.TextArea placeholder="내용을 입력해주세요." />
        <S.SaveBtn>저 장</S.SaveBtn>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default LeaveCommentModal;

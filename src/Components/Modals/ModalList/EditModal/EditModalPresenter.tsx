import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import { CancleBtn } from "../../../../Asset/SVG";
import { useSaveAnswer } from "./EditModalContainer";

const EditModal: React.FC<ModalProps> = ({ close, idx, heading }) => {
  const [setContent, TrySave] = useSaveAnswer(idx || 0, "POST");

  return (
    <ModalContainer close={close} width={1000} height={600} idx={idx}>
      <S.ModalWrapper>
        <S.H1>{heading}</S.H1>
        <S.ModalImg onClick={close}>
          <CancleBtn />
        </S.ModalImg>
        <S.InputBox placeholder="제목을 입력해주세요."/>
        <S.TextArea
          placeholder="내용을 입력해주세요."
          onChange={({ target: { value } }) => setContent(value)}
        />
        <S.BtnWrapper>
          {(heading === "수정하기" &&
          <S.DeleteBtn>
            삭 제
          </S.DeleteBtn>
          )}
          <S.SaveBtn
            onClick={() => {
              TrySave("");
            }}
          >
            저 장
          </S.SaveBtn>
        </S.BtnWrapper>
      </S.ModalWrapper>
    </ModalContainer>
  );
};

export default EditModal;

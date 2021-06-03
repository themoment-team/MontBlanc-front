import { ModalContainer } from "../../ModalContainer";
import { ModalProps } from "../../../../Context/Modal";
import * as S from "./style";
import { CancleBtn } from "../../../../Asset/SVG";
import { useStateDistinction } from "./EditModalContainer";
import useGetModalValue from "../ViewModal/ViewModalContainer";

const EditModal: React.FC<ModalProps> = ({
  close,
  idx,
  state,
  heading,
  content,
  header,
}) => {
  const [setContent, setHeading, TryUpdate, TrySave, TryDelete] =
    useStateDistinction(idx || 0, state || "");

  return (
    <ModalContainer close={close} width={1000} height={600} idx={idx}>
      <S.ModalWrapper>
        <S.H1>{heading}</S.H1>
        <S.ModalImg onClick={close}>
          <CancleBtn />
        </S.ModalImg>
        {content ? (
          <>
            <S.InputBox
              placeholder={header}
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
        <S.BtnWrapper onClick={close}>
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
    </ModalContainer>
  );
};

export default EditModal;

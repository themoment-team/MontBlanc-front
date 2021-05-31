import * as I from "../../../Asset/SVG";
import * as S from "./styled";
import { useModal } from "../../../Context/Modal";

interface ImprovmentProps {
  color: string;
  header: string;
  content: string;
}

const ImprovmentItemPresenter: React.FC<ImprovmentProps> = (
  p: ImprovmentProps
) => {
  const modal = useModal();

  return (
    <S.ImprovmentBox color={randomColor}>
      <S.ImprovmentContentBox>
        <I.DoubleQuotes />
        <S.ImprovmentContent>
          <S.ImprovmentHeading>{p.header}</S.ImprovmentHeading>
          <S.AboutBtn
            onClick={() =>
              modal.open("ViewModal", p.idx, "improvment", "작성하기", p.key)
            }
          >
            자세히 보기
          </S.AboutBtn>
        </S.ImprovmentContent>
        <S.ImprovmentImg>
          <I.ImprovmentSvg1 />
        </S.ImprovmentImg>
      </S.ImprovmentContentBox>
    </S.ImprovmentBox>
  );
};

export default ImprovmentItemPresenter;

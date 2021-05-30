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
    <S.ImprovmentBox color={p.color}>
      <I.DoubleQuotes />
      <S.ImprovmentContent>
        <S.ImprovmentHeading>{p.header}</S.ImprovmentHeading>
        <S.AboutBtn onClick={() => modal.open("ViewModal", 0)}>
          자세히 보기
        </S.AboutBtn>
      </S.ImprovmentContent>
      <S.ImprovmentImg>
        <I.ImprovmentSvg1 />
      </S.ImprovmentImg>
    </S.ImprovmentBox>
  );
};

export default ImprovmentItemPresenter;

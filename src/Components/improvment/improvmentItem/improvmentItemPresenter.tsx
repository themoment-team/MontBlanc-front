import * as I from "../../../Asset/SVG";
import * as S from "./styled";
import { useModal } from "../../../Context/Modal";
import { randomColorPicker } from "./improvmentItemContainer";

interface ImprovmentProps {
  header: string;
  content: string;
}

const ImprovmentItemPresenter: React.FC<ImprovmentProps> = (
  p: ImprovmentProps
) => {
  const modal = useModal();
  const randomColor = randomColorPicker();
  console.log(p.header);

  return (
    <S.ImprovmentBox color={randomColor}>
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

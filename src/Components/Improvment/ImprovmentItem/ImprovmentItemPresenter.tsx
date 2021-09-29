import * as I from "../../../Asset/SVG";
import * as S from "./styled";
import { randomColorPicker } from "./ImprovmentItemContainer";
import { ViewModal } from "Components/Modals";

interface ImprovmentProps {
  header: string;
  content: string;
  idx: number;
  key: number;
}

const ImprovmentItemPresenter: React.FC<ImprovmentProps> = (
  p: ImprovmentProps,
) => {
  const randomColor = randomColorPicker();

  return (
    <S.ImprovmentBox color={randomColor}>
      <S.ImprovmentContentBox>
        <I.DoubleQuotes />
        <S.ImprovmentContent>
          <S.ImprovmentHeading>{p.header}</S.ImprovmentHeading>
          <S.AboutBtn>
            <ViewModal
              idx={p.idx}
              state={"improvment"}
              key={p.key}
              buttonContent={"자세히 보기"}
            />
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

import * as I from "../../../Asset/SVG";
import * as S from "./style";
import { ViewModal } from "Components/Modals";

interface ImprovementProps {
  header: string;
  content: string;
  idx: number;
  key: number;
}

const randomColorPicker = () => {
  const color: string[] = ["#CCD1FF", "#FFDEDE", "#C3E2FF"];

  const randomNumber: number = Math.floor(Math.random() * 3);

  return color[randomNumber];
};

const ImprovementItemPresenter: React.FC<ImprovementProps> = (
  p: ImprovementProps,
) => {
  const randomColor = randomColorPicker();

  return (
    <S.ImprovementBox color={randomColor}>
      <S.ImprovementContentBox>
        <I.DoubleQuotes />
        <S.ImprovementContent>
          <S.ImprovementHeading>{p.header}</S.ImprovementHeading>
          <S.AboutBtn>
            <ViewModal
              idx={p.idx}
              state={"improvement"}
              key={p.key}
              buttonContent={"자세히 보기"}
            />
          </S.AboutBtn>
        </S.ImprovementContent>
        <S.ImprovementImg>
          <I.ImprovementSvg1 />
        </S.ImprovementImg>
      </S.ImprovementContentBox>
    </S.ImprovementBox>
  );
};

export default ImprovementItemPresenter;

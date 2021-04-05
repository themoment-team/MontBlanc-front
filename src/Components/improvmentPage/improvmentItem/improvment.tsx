import * as I from "../../../Asset/SVG";
import * as S from "./styled";

interface ImprovmentProps {
  color: string;
}

const Improvment: React.FC<ImprovmentProps> = (p: ImprovmentProps) => {
  return (
    <S.ImprovmentBox color={p.color}>
      <I.DoubleQuotes />
      <S.ImprovmentContent>
        <S.ImprovmentHeading>
          전공동아리 시간이 너무 부족해요.
          <br /> 늘려주세요 ㅠㅠ
        </S.ImprovmentHeading>
        <S.AboutBtn>자세히 보기</S.AboutBtn>
      </S.ImprovmentContent>
      <S.ImprovmentImg>
        <I.ImprovmentSvg1 />
      </S.ImprovmentImg>
    </S.ImprovmentBox>
  );
};

export default Improvment;

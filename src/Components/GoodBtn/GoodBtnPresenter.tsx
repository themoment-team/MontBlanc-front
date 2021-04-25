import * as I from "../../Asset/SVG";
import * as S from "./styled";
import useLikeCheck from "./GoodBtnContainer";

interface GoodBtnProps {
  Background: boolean;
  Goods: number;
}

const GoodBtn: React.FC<GoodBtnProps> = ({ Background = true, Goods }) => {
  const [likeCnt, isLiked, onClickBtn] = useLikeCheck(Goods);
  return (
    <S.GoodBtnStyle
      Liked={isLiked}
      onClick={onClickBtn}
      hasBackground={Background}
    >
      <I.GoodBtnSvg color={isLiked && Background ? "#fff" : "#6B7187"} />
      <S.LikeCnt Liked={isLiked} hasBackground={Background}>
        {likeCnt}
      </S.LikeCnt>
    </S.GoodBtnStyle>
  );
};

export default GoodBtn;

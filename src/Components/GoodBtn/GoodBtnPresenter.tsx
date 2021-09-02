import * as I from "Asset/Svg";
import * as S from "./styled";
import useLikeCheck from "./GoodBtnContainer";

interface GoodBtnProps {
  Background: boolean;
  Goods: number;
  Idx: number;
}

const GoodBtn: React.FC<GoodBtnProps> = ({
  Background = true,
  Goods,
  Idx,
}: GoodBtnProps) => {
  const [likeCnt, isLiked, onClickBtn] = useLikeCheck(Goods, Idx);
  return (
    <S.GoodBtnStyle
      Liked={isLiked}
      onClick={onClickBtn}
      hasBackground={Background}
    >
      <I.GoodBtnSvg
        color={
          isLiked && Background
            ? "#fff"
            : !Background && isLiked
            ? "#475AFF"
            : "#6B7187"
        }
      />
      <S.LikeCnt Liked={isLiked} hasBackground={Background}>
        {likeCnt}
      </S.LikeCnt>
    </S.GoodBtnStyle>
  );
};

export default GoodBtn;

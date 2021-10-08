import * as I from '../../Asset/SVG';
import * as S from './styled';
import { useState } from 'react';
import Table from 'Api/table';

export type isLiked = String | null;
type UseLikeResult = [number, isLiked, () => void];

const useLikeCheck = (liked: number, idx: number): UseLikeResult => {
  const TOKEN_EXIST = localStorage.getItem(`tm_goods_${idx}`);
  const [likeCnt, setLikeCnt] = useState<number>(liked);
  const [isLiked, setLiked] = useState<String | null>(TOKEN_EXIST);
  const onIncrease = () => {
    if (!TOKEN_EXIST) {
      localStorage.setItem(`tm_goods_${idx}`, 'exist');
      setLikeCnt((likeCnt) => likeCnt + 1);
      setLiked('exist');
      Table.addGoods(idx);
    }
  };
  const onDecrease = () => {
    localStorage.removeItem(`tm_goods_${idx}`);
    setLikeCnt((likeCnt) => likeCnt - 1);
    setLiked(null);
    Table.cancleGoods(idx);
  };
  const onClickBtn = () => {
    !isLiked ? onIncrease() : onDecrease();
  };

  return [likeCnt, isLiked, onClickBtn];
};

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
            ? '#fff'
            : !Background && isLiked
            ? '#475AFF'
            : '#6B7187'
        }
      />
      <S.LikeCnt Liked={isLiked} hasBackground={Background}>
        {likeCnt}
      </S.LikeCnt>
    </S.GoodBtnStyle>
  );
};

export default GoodBtn;

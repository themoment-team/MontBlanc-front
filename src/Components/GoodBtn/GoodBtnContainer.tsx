import { useState } from "react";
import Table from "Api/table";

type UseLikeResult = [number, boolean, () => void];

const useLikeCheck = (liked: number, idx: number): UseLikeResult => {
  const [likeCnt, setLikeCnt] = useState<number>(liked);
  const [isLiked, setLiked] = useState<boolean>(false);
  const onIncrease = () => {
    setLikeCnt((likeCnt) => likeCnt + 1);
    setLiked(true);
    Table.addGoods(idx);
  };
  const onDecrease = () => {
    setLikeCnt((likeCnt) => likeCnt - 1);
    setLiked(false);
    Table.cancleGoods(idx);
  };
  const onClickBtn = () => {
    !isLiked ? onIncrease() : onDecrease();
  };

  return [likeCnt, isLiked, onClickBtn];
};

export default useLikeCheck;

import { useState } from "react";

type UseLikeResult = [number, boolean, () => void];

const useLikeCheck = (liked: number): UseLikeResult => {
  const [likeCnt, setLikeCnt] = useState<number>(liked);
  const [isLiked, setLiked] = useState<boolean>(false);
  const onIncrease = () => {
    setLikeCnt((likeCnt) => likeCnt + 1);
    setLiked(true);
  };
  const onDecrease = () => {
    setLikeCnt((likeCnt) => likeCnt - 1);
    setLiked(false);
  };
  const onClickBtn = () => {
    !isLiked ? onIncrease() : onDecrease();
  };

  return [likeCnt, isLiked, onClickBtn];
};

export default useLikeCheck;

import React from "react";
import * as S from "./style"

interface ImgProp {
  Img: string
}

const BannerContent = ({ Img }: ImgProp) => {
  return (
    <S.BannerImg src={"/Images/Banners/" + Img} alt="banner" />
  );
}

export default BannerContent;
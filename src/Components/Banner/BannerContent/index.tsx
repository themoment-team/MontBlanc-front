import React from "react";
import * as S from "./style"

interface ImgProp {
  Img: string
}

const BannerContent = ({ Img }: ImgProp) => {
  const imgURL = "/Images/Banners/" + Img
  return (
    <S.BannerContent>
      <S.BannerImg src={imgURL} alt="banner" />
    </S.BannerContent>
  );
}

export default BannerContent;
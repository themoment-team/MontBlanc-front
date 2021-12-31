import React from "react";
import * as S from "./style"

type ImgProp = {
  Img: string
}

const BannerContent: React.FC<ImgProp> = ({ Img }) => {
  return (
    <S.BannerImg src={"/Images/Banners/" + Img} alt="banner" />
  );
}

export default BannerContent;
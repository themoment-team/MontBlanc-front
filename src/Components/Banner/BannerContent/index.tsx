import React from "react";
import * as S from "./style"

type ImgProps = {
  Img: string
}

const BannerContent: React.FC<ImgProps> = ({ Img }) => {
  return <S.BannerImg src={"/Images/Banners/" + Img} alt="banner" />
}

export default BannerContent;
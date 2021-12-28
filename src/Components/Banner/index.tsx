import React, {useEffect} from "react";
import { useSetRecoilState } from "recoil";
import { VisibleBannerState } from "Atom";
import BannerContent from "./BannerContent";
import * as S from "./style"

const useVisibleState = () => {
  const setVisibleBanner = useSetRecoilState(VisibleBannerState);

  const onClick = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem("invisible-banner", `${date}`);
    setVisibleBanner(false);
  };

  useEffect(() => {
    const storage = localStorage.getItem("invisible-banner");
    if (!storage) return;
    const bannerDate = new Date(`${storage}`);
    const date = new Date();
    setVisibleBanner(bannerDate < date);
  }, []);

  return [onClick];
};

const Banner = () => {
  const [onClick] = useVisibleState();

  return (
    <S.BannerBox>
      <BannerContent Img={`banner1.jpeg`} />
      <S.InvisibleCheck>
        <S.CheckButton onClick={onClick}>
          <S.Explain>오늘 하루 보지 않기</S.Explain>
          <S.CheckBox />
        </S.CheckButton>
      </S.InvisibleCheck>
    </S.BannerBox>
  );
}

export default Banner;
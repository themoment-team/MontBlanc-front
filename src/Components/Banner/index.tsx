import React, { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { VisibleBannerState } from "Atom";
import BannerContent from "./BannerContent";
import * as S from "./style";

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

const banners = [
  {
    id: 1,
    URL: 'banner1.jpg'
  },
  {
    id: 2,
    URL: 'banner2.jpg'
  }
]

const Banner = () => {
  const [onClick] = useVisibleState();

  const totalBanners = banners.length - 1;

  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerRef = useRef<any>(null);

  const nextSlide = () => {
    if (currentBanner >= totalBanners) {
      setCurrentBanner(0);
    }
    else {
      setCurrentBanner(currentBanner + 1);
    }
  }

  useEffect(() => {
    bannerRef.current.style.transition = "all 0.5s ease-in-out";
    bannerRef.current.style.transform = `translateX(-${currentBanner}00%)`;
  }, [currentBanner])

  return (
    <S.BannerBox>
      <S.Banner ref={bannerRef}>
        {banners.map(banner => (
          <BannerContent Img={banner.URL} key={banner.id} />
        ))}
      </S.Banner>
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
import React, { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { VisibleBannerState } from "Atom";
import BannerContent from "./BannerContent";
import useSetInterval from "Hooks/useSetInterval";
import * as S from "./style";
import { Style } from "util";

type useVisibleStateT = [onclick: () => void];

const useVisibleState = (): useVisibleStateT => {
  const setVisibleBanner = useSetRecoilState(VisibleBannerState);

  const onClick = (): void => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem("invisible-banner", `${date}`);
    setVisibleBanner(false);
  };

  useEffect((): void => {
    const storage = localStorage.getItem("invisible-banner");
    if (!storage) return;
    const bannerDate = new Date(`${storage}`);
    const date = new Date();
    setVisibleBanner(bannerDate < date);
  }, []);

  return [onClick];
};

type bannersT ={
  id: number;
  URL: string;
};

const banners:bannersT[] = [
  {
    id: 1,
    URL: "banner1.jpg",
  },
  {
    id: 2,
    URL: "banner2.jpg",
  },
];

const Banner:React.FC = () => {
  const [onClick] = useVisibleState();

  const totalBanners: number = banners.length - 1;

  const [currentBanner, setCurrentBanner] = useState<number>(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useSetInterval(() => {
    if (currentBanner >= totalBanners) {
      setCurrentBanner(0);
    } else {
      setCurrentBanner(currentBanner + 1);
    }
  }, 3000);

  useEffect(() => {
    const { current } = bannerRef;
    if (current !== null) {
      current.style.transition = "all 1s ease-in-out";
      current.style.transform = `translateX(-${currentBanner}00vw)`;
    }
  }, [currentBanner]);

  return (
    <S.BannerBox>
      <S.Banner ref={bannerRef}>
        {banners.map((banner) => (
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
};

export default Banner;

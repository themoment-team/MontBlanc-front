import { useSetRecoilState } from "recoil";
import { VisibleBannerState } from "Atom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare as Square } from "@fortawesome/free-regular-svg-icons";
import * as S from "./style";
import { useEffect } from "react";

const slideImages = ["banner.png", "banner.png", "banner.png"];

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
    <S.BannerWrapper>
      <Slide easing="ease">
        {slideImages.map((slide) => (
          <div className="each-slide">
            <div
              className="slideImage"
              style={{ backgroundImage: `url(/slideImg/${slide})` }}
            >
              <span>배너 IMAGE</span>
            </div>
          </div>
        ))}
      </Slide>
      <div className="close">
        <div onClick={onClick}>
          <span>오늘 하루 보지 않기</span>
          <FontAwesomeIcon icon={Square} />
        </div>
      </div>
    </S.BannerWrapper>
  );
};

export default Banner;

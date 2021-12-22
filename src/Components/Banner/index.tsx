import React from "react";
import { useRecoilState } from "recoil";
import { ShowBanner } from "Atom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import * as S from "./style";

const slideImages = ["/banner.png", "/banner.png", "/banner.png"];

const Banner = () => {
  const [_, setShowBanner] = useRecoilState(ShowBanner);
  const onClick = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem("the-moment-banner", `${date}`);
    setShowBanner(false);
  };

  return (
    <S.BannerWrapper>
      <Slide easing="ease">
        {slideImages.map((slide) => (
          <div className="each-slide">
            <div
              className="slideImage"
              style={{ backgroundImage: `url(/slideImg${slide})` }}
            >
              <span>배너 IMAGE</span>
            </div>
          </div>
        ))}
      </Slide>
      <div className="close">
        <div onClick={onClick}>
          <span>오늘 하루 보지 않기</span>
          <FontAwesomeIcon icon={faSquare} />
        </div>
      </div>
    </S.BannerWrapper>
  );
};

export default Banner;

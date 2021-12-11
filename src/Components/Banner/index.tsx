import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as S from "./style";

const slideImages = ["/banner.png", "/banner.png", "/banner.png"];

const Banner = () => {
  return (
    <S.BannerWrapper>
      <Slide easing="ease">
        {slideImages.map((slide, i) => (
          <div className="each-slide">
            <div
              className="slideImage"
              style={{ backgroundImage: `url(/slideImg${slide})` }}
            >
              <span>
                {slide}
                {i}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </S.BannerWrapper>
  );
};

export default Banner;

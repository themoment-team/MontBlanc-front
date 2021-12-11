import styled from "styled-components";
import device from "Shared/Config";

export const BannerWrapper = styled.div`
  position relative;
  top: 110px;
  left: 0;
  height: 120px;

  @media ${device.tablet} {
    display: none;
  }

  .slideImage {
    height: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .each-slide {
    height: 100px;
  }
  .nav.default-nav {
    display: none;
  }
`;

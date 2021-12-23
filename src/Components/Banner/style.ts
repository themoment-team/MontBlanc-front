import styled from "styled-components";
import device from "Shared/Config";

export const BannerWrapper = styled.div`
  position: relative;
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

    /* span tag 가운데 정렬 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .each-slide {
    height: 100px;
  }
  .nav.default-nav {
    display: none;
  }
  .close {
    background: #6a76e9;
    height: 30px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;

    div {
      cursor: pointer;

      span {
        margin-right: 7px;
      }
    }
  }
`;

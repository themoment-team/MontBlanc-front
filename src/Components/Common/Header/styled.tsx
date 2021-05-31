import styled from "styled-components";
import device from "Constants/reactive";

interface NavBar {
  active: boolean;
}

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  padding: 23px 15vw;
  width: 70vw;
  z-index: 1;
  background: white;
  @media ${device.mobile} {
    width: 90vw;
    padding: 23px 5vw;
  }
  & > div {
    color: #434c9c;
    font-weight: 600;
    font-size: 22px;
    position: relative;
    top: -10px;
    margin: 21px;
  }
`;

export const Logo = styled.h1`
  display: inline-block;
  border-right: 2px solid #434c9c;
  padding-right: 21px;
  @media screen and (max-width: 1400px) {
    border: none;
  }
`;

export const LogoText = styled.span`
  color: #434c9c;
  font-weight: 600;
  font-size: 22px;
  margin-left: 21px;
  position: relative;
  top: -13px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const BarWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
  }
  & > svg {
    z-index: 99;
    font-size: 32px;
    color: #434c9c;
    position: absolute;
    top: 32px;
    right: 9.5%;
  }
`;

export const HeaderNav = styled.nav<NavBar>`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${(props) => (props.active ? "none" : "flex")};
  }
  & > a {
    display: inline-block;
    margin: 36px;
    @media screen and (max-width: 1200px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  & > button {
    display: inline-block;
    padding: 0;
    margin: 36px;
    background: none;
    text-decoration: none;
    color: #434c9c;
    font-size: 1rem;
    @media screen and (max-width: 1200px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

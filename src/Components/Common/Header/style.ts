import styled from "styled-components";
import device from "Constants/reactive";

interface NavBar {
  active: boolean;
}

export const Header = styled.header `
  position: fixed;
  top: 0;
  width: 100vw;
  height:100px;
  background: white;
  z-index: 1;
  display: flex;

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BlurWrapper = styled.div `
  width : 100vw;
  background: #FFFFFF;
  filter: blur(30px);
  position: absolute;
  z-index: -1;
  height: 100px;
`;

export const Logo = styled.h1 `
  display: inline-block;
  border-right: 2px solid #6A76E9;
  padding-right: 21px;
  padding-left: 5vw;
  @media screen and (max-width: 1500px) {
    border: none;
  }
`;

export const HeaderNav = styled.nav < NavBar > `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40vw;
  /* border: 1px solid red; */
  background-color: white;
  @media screen and (max-width: 1800px) {
    padding-left: 30vw;
  }
  @media screen and (max-width: 1230px) {
    width : 100vw;
    padding-left: 5vw;
    flex-direction: column;
    align-items: flex-start;
    display: ${(props) => (props.active ? "none" : "flex")};
  }
  & > a {
    display: inline-block;
    margin: 0px 30px;
    @media screen and (max-width: 1230px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  & > a:last-child {
    margin-right: 0;
  }
`;

export const NavButton = styled.button `
  display: inline-block;
  margin: 36px;
  padding: 0;
  background: none;
  text-decoration: none;
  color: #6A76E9;
  font-size: 1rem;
  @media screen and (max-width: 1230px) {
    margin: 24px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const BarWrapper = styled.div `
  @media screen and (min-width: 1230px) {
    display: none;
  }
  & > svg {
    z-index: 2;
    font-size: 32px;
    color: #6A76E9;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1230px) {
    width: 90vw;
  }
  & > a {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.span `
  @media screen and (max-width: 1500px) {
    display: none;
  }
  align-items: center;
  color: #6A76E9;
  font-weight: 600;
  font-size: 22px;
  margin: 21px;
`;
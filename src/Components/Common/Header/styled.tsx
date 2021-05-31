import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  padding: 23px 9.5%;
  width: 80vw;
  z-index: 99;
  background: white;
  & > div {
    & > span {
      color: #434c9c;
      font-weight: 600;
      font-size: 22px;
      position: relative;
      top: -10px;
      margin: 21px;
    }
  }
`;

export const Logo = styled.h1`
  display: inline-block;
  border-right: 2px solid #434c9c;
  padding-right: 21px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  & > a {
    display: inline-block;
    margin: 36px 44px;
  }
  & > button {
    display: inline-block;
    padding: 0;
    margin: 36px;
    background: none;
    text-decoration: none;
    color: #434C9C;
    font-size: 1rem;
  }
`;

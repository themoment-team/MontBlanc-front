import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 23px 14%;
  width: 70vw;
  background: white;
  z-index: 99;
`;

export const LogoText = styled.span`
  color: #434c9c;
  font-weight: 600;
  font-size: 22px;
  margin-left: 21px;
  position: relative;
  top: -13px;
`;

export const Logo = styled.h1`
  display: inline-block;
  border-right: 1px solid #434c9c;
  padding-right: 21px;
`;

export const HeaderNav = styled.nav`
  margin-top: 30px;
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

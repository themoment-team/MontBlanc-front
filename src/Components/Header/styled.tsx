import styled from "styled-components";

export const Header = styled.div`
  margin: 0 10%;
  border-top: 1px solid #434c9c;
  display: flex;
  justify-content: space-between;
  div {
    margin-top: 50px;
    /* width: 70%; */
    span {
      color: #434c9c;
      font-weight: 600;
      font-size: 22px;
      margin-left: 21px;
      position: relative;
      top: -13px;
    }
  }
  svg {
    border-right: 1px solid #434c9c;
    padding-right: 21px;
  }
  ul {
    margin: 61px 0 0 200px;
    width: 30%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      color: #434c9c;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

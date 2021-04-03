import styled from "styled-components";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 230px 30px 0 30px;
  width: 100%;
  height: 100%;
`;

export const LeftBox = styled.div`
  height: 23vh;
  position: sticky;
  top: 230px;
`;

export const Btn = styled.button`
  display: flex;
  width: 440px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 26px 31px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  background-color: #434c9c;
  a {
    align-self: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: underline;
  }
  svg {
    padding-left: 5px;
  }
`;

import styled from "styled-components";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 215px;
  width: 80%;
`;

export const LeftBox = styled.div`
  height: fit-content;
  position: sticky;
  top: 215px;
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

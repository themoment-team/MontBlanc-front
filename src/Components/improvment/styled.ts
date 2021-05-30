import styled from "styled-components";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 70vw;
`;

export const LeftBox = styled.div`
  height: fit-content;
  position: sticky;
  top: 180px;
  margin-right: 30px;
`;

export const Btn = styled.button`
  display: flex;
  width: 324px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 19px 23px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background-color: #434c9c;
  a {
    align-self: center;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-decoration: underline;
  }
  svg {
    padding-left: 5px;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
button{
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
}

li {
  cursor: pointer;
}

input {
  background-color: #f4f4f4;
  color : #a6a6a6;
}

`;

export default GlobalStyle;

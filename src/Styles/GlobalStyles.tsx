import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

button {
  border-radius: 10px;
  padding: 10px 32px;
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

a {
  text-decoration: none;
  color: #434C9C;
}
`;

export default GlobalStyle;

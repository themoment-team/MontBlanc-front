import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:'AppleSDGothicNeoL';
  src: url("../../Fonts/AppleSDGothicNeoL.ttf") format("truetype");
}

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

textarea {
  font-family: "AppleSDGothicNeoL";
}

a {
  text-decoration: none;
  color: #434C9C;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // import fonts

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    src: url("styles/fonts/NotoSansKR-Light.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Light.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Light.otf") format('truetype')
  }
  
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: normal;
    src: url("styles/fonts/NotoSansKR-Regular.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Regular.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Regular.otf") format('truetype')
  }
   
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    src: url("styles/fonts/NotoSansKR-Medium.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Medium.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Medium.otf") format('truetype')
  }
  
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    src: url("styles/fonts/NotoSansKR-Bold.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Bold.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Bold.otf") format('truetype')
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
  
  a {
    text-decoration: none;
    color: #434C9C;
  }
`;

export default GlobalStyle;

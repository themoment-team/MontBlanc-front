import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import reportWebVitals from "./reportWebVitals";

const rootElement: HTMLElement | null = document.getElementById("root");

const AppWrapper: React.FC = () => {
 return(
   <RecoilRoot>
     <React.StrictMode />
   </RecoilRoot>
 );
}

if (rootElement?.hasChildNodes()) {
  hydrate(
    <AppWrapper>
      <App />
    </AppWrapper>,
    rootElement
  );
} else {
  render(
    <AppWrapper>
      <App />
    </AppWrapper>,
    rootElement
  );
}

reportWebVitals();

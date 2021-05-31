import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalContextProvider } from "./Context/Modal";
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <RecoilRoot>
    <ModalContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ModalContextProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
reportWebVitals();

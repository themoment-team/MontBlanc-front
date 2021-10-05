import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as P from "./Page/index";
import Config from "Constants/Config.json";
import GlobalStyle from "./Constants/Styles/GlobalStyles";
import reactModal from "react-modal";

reactModal.setAppElement("#root");

reactModal.defaultStyles = {
  overlay: {
    zIndex: 3,
    position: "fixed",
    inset: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(54, 54, 54, 0.4)",
  },
  content: {
    zIndex: 3,
    inset: "40px",
    overflow: "hidden",
    borderRadius: "15px",
    outline: "none",
    flexDirection: "column",
    background: "#FFFFFF",
    border: "none",
    boxSizing: "border-box",
  },
};

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path={Config.LINK.ABOUT} component={P.About} />
      <Route path={Config.LINK.IMPROVMENT} component={P.Improvment} />
      <Route path={Config.LINK.RANK} component={P.Top10} />
      <Route path={Config.LINK.COMMENT} component={P.LeaveComments} />
      <Route path={Config.LINK.START} component={P.Start} />
      <Redirect path="*" to={Config.LINK.COMMENT} />
    </Switch>
  </BrowserRouter>
);

export default App;

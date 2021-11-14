import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as P from "./Page/index";
import Config from "Shared/Config.json";
import GlobalStyle from "Shared/Styles/GlobalStyles";
import reactModal from "react-modal";

const checkState: boolean = false;

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
    {checkState ? (
      <Switch>
        <Route path={Config.LINK.SYSTEMCHECK} component={P.SystemCheck} />
        <Redirect path="*" to={Config.LINK.SYSTEMCHECK} />
      </Switch>
    ) : (
      <Switch>
        <Route path={Config.LINK.ABOUT} exact component={P.About} />
        <Route path={Config.LINK.IMPROVEMENT} exact component={P.Improvement} />
        <Route path={Config.LINK.RANK} exact component={P.Rank} />
        <Route path={Config.LINK.COMMENT} exact component={P.LeaveComments} />
        <Route path={Config.LINK.START} exact component={P.Start} />
        <Route component={P.NotFound} />
      </Switch>
    )}
  </BrowserRouter>
);

export default App;

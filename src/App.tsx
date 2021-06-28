import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as P from "./Page/index";
import Config from "Constants/Config.json";
import GlobalStyle from "./Constants/Styles/GlobalStyles";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path={Config.LINK.ABOUT} component={P.about} />
      <Route path={Config.LINK.IMPROVMENT} component={P.improvment} />
      <Route path={Config.LINK.RANK} component={P.Top10} />
      <Route path={Config.LINK.COMMENT} component={P.LeaveComments} />
      <Route path={Config.LINK.START} component={P.Start} />
      <Redirect path="*" to={Config.LINK.COMMENT} />
    </Switch>
  </BrowserRouter>
);

export default App;

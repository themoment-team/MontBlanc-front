import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as P from "./Page/index";
import GlobalStyle from "./Styles/GlobalStyles";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/about" component={P.about} />
      <Route path="/improvment" component={P.improvment} />
      <Route path="/v1/uncomfortable" component={P.Top10} />
      <Route path="/Leave_opinion" component={P.LeaveComments} />
      <Route path="/" component={P.Start} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;

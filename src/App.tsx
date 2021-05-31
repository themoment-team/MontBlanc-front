import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import * as P from "./Page/index";
import GlobalStyle from "./Constants/GlobalStyle/GlobalStyles";

const App: React.FC = () =>  (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/about" component={P.about} />
      <Route path="/improvment" component={P.improvment} />
      <Route path="/topten" component={P.Top10} />
      <Route path="/Leave_opinion" component={P.LeaveComments} />
      <Route path="/" component={P.Start} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default App;

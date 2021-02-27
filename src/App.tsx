import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LeaveComments } from "./Page/index";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LeaveComments} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;

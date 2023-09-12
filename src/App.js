import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/example" component={Page2} />
          <Route path="/" component={Page1} />
        </Switch>
      </Router>
    </div>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyFirstHook from "./week-3/react-hook/firstReactHook";
import CounterApp from "./week-3/react-hook/prevState";
import MySecondHook from "./week-3/react-hook/secondReactHook";
import ThirdHook from "./week-3/react-hook/thirdReactHook";

export default function RouteApp() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/firstHook">
            <MyFirstHook />
          </Route>
          <Route path="/inc">
            <CounterApp />
          </Route>
          <Route path="/secondHook">
            <MySecondHook />
          </Route>
          <Route path="/third/profile/:id">
            <ThirdHook />
          </Route>
        </Switch>
    </Router>
  );
}

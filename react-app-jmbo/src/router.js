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
import UserProfile from "./week-3/react-hook/userProfile";
import EffectHook from "./week-3/react-hook/effectHook";
import TimerApp from "./week-3/timer/timerApp";
import ApiCallExampleHook from "./week-3/react-hook/api-call-example";
import PaginationPageNumber from "./week-3/pagination/pagination-pageNumber";
import PaginationLoadMore from "./week-3/pagination/pagination_loadmore";
import UserProfileList from "./week-3/react-hook/user-profile-retriver";
import TodoHome from "./week-3/todo-app-firebase/todo-home";
import TodoNotesList from "./week-3/todo-app-firebase/todo-notes-list";

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
          <Route path="/user-profile/:id">
            <UserProfile />
          </Route>
          <Route path="/effectHook">
            <EffectHook />
          </Route>
          <Route path="/timer">
            <TimerApp />
          </Route>
          <Route path="/hook-api-call">
            <ApiCallExampleHook />
          </Route>
          <Router path="/pageNumber">
            <PaginationPageNumber />
          </Router>
          <Router path="/pageLoadMore">
            <PaginationLoadMore />
          </Router>
          <Router path="/user-list">
            <UserProfileList />
          </Router>
          <Router path="/todo-home" exact>
            <TodoHome />
          </Router>
          <Router path="/todo-list" exact>
            <TodoNotesList />
          </Router>
        </Switch>
    </Router>
  );
}

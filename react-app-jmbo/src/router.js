import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import LogIn from "./week-3/login-project/login";
import Chat from "./week-3/login-project/chat";
import HomePage from "./home";
import TodoLogIn from "./week-3/todo-app-firebase/todo-login";

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
        <Route path="/pageNumber">
          <PaginationPageNumber />
        </Route>
        <Route path="/pageLoadMore">
          <PaginationLoadMore />
        </Route>
        <Route path="/user-list">
          <UserProfileList />
        </Route>
        <Route path="/todo-home" exact>
          <TodoHome />
        </Route>
        <Route path="/todo-home/edit" exact>
          <TodoHome />
        </Route>
        <Route path="/todo-login" exact>
          <TodoLogIn />
        </Route>
        <Route path="/todo-list/:id" exact>
          <TodoNotesList />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>

      </Switch>
    </Router>
  );
}

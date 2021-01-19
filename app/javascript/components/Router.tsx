import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";

export const Routes = {
  Home: "/",
  Test: "/test",
};

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

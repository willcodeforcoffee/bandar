import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { NotFound404 } from "./pages/NotFound404";

export const Routes = {
  Home: "/",
  Test: "/test",
  Auth: {
    Accept: "/auth/accept",
  },
};

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

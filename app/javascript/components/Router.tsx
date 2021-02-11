import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { NotFound404 } from "./pages/NotFound404";
import { AppPaths } from "./AppConstants";

export const Routes = {
  Home: "/",
  Test: "/test",
  Auth: {
    Accept: "/auth/accept",
  },
};

interface RouterProps {
  paths: AppPaths;
}

export function Router(props: RouterProps): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar paths={props.paths}></NavBar>
      <div className="p-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

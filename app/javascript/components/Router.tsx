import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";

export const Routes = {
  Home: "/",
  Test: "/test",
};

export function Router(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  // NOTE: mr-auto pushes the bar left. Remove mr-auto for right aligned navs
  const navClasses = ["px-2", "pt-2", "pb-3", "sm:flex", "mr-auto"];
  if (!isOpen) {
    navClasses.push("hidden");
  }

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

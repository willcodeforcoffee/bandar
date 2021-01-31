import React from "react";
import { AppConstants } from "./AppConstants";
import { AppContext } from "./AppContext";
import { Router } from "./Router";

interface AppProps {
  constants: AppConstants;
}

function App(props: AppProps): JSX.Element {
  return (
    <AppContext constants={props.constants}>
      <Router />
    </AppContext>
  );
}

export { App, AppProps };

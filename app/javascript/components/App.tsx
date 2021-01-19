import React from "react";
import { AppConstants } from "./AppConstants";
import { AppContext } from "./AppContext";

interface AppProps {
  constants: AppConstants;
}

function App(props: AppProps): JSX.Element {
  return (
    <AppContext constants={props.constants}>
      <div className="prose">
        <h1>React is Working</h1>
        <p>This means React Rails is working</p>
      </div>
    </AppContext>
  );
}

export { App, AppProps };

import React from "react";
import { render } from "react-dom";

function App(): JSX.Element {
  return (
    <div className="prose">
      <h1>Hello World</h1>
      <p>Welcome to Bandar</p>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#main")) {
    render(<App />, document.querySelector("#main"));
  }
});

import React from "react";
import { render } from "react-dom";

function App(): JSX.Element {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to Bandar</p>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#main")) {
    render(<App />, document.querySelector("#main"));
  }
});

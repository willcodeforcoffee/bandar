import { Button, Form, InputEmailAddress, TextInputControl } from "components/forms";
import React, { FormEvent } from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";

function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
  console.log("onSubmit", event);
}

export function Test(): JSX.Element {
  console.log("Test!");
  return (
    <div id="Test">
      <h1>Test</h1>

      <BreakpointDebugger />

      <Form name="Test Form" title="Form Title" onSubmit={handleOnSubmit}>
        <TextInputControl labelText="Simple Text Input" placeholder="Type something here..." />
        <InputEmailAddress labelText="Email Address Input" placeholder="test@example.com" />
        <Button label="Button" />
      </Form>
    </div>
  );
}

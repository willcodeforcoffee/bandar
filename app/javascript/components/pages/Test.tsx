import { Button, ButtonRow, Form, InputEmailAddress, InputPasswordControl, InputTextControl } from "components/forms";
import React, { FormEvent } from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";

function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
  console.log("onSubmit", event);
}

function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  console.log("handleClick", event);
}

export function Test(): JSX.Element {
  console.log("Test!");
  return (
    <div id="Test">
      <h1>Test</h1>

      <BreakpointDebugger />

      <div className="lg:w-3/4 xl:w-1/2">
        <Form name="Test Form" title="Form Title" onSubmit={handleOnSubmit}>
          <InputTextControl labelText="Simple Text Input" placeholder="Type something here..." />
          <InputEmailAddress labelText="Email Address Input" placeholder="test@example.com" />
          <InputPasswordControl labelText="Password Input" placeholder="type a p*ssw*rd" />
          <ButtonRow>
            <Button label="Primary" purpose="primary" onClick={handleClick} />
            <Button label="Danger" purpose="danger" onClick={handleClick} />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}

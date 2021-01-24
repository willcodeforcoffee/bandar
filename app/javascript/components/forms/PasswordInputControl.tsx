import * as React from "react";
import { FormControlWrapperProps, FormControlWrapper } from "./FormControlWrapper";
import {
  InputTypes,
  InputFormControlAbstractionProps,
  InputFormControlAbstraction,
} from "./InputFormControlAbstraction";

interface PasswordInputControlProps extends FormControlWrapperProps, InputFormControlAbstractionProps {
  initialValue?: string;
}

function PasswordInputControl(props: PasswordInputControlProps): JSX.Element {
  return (
    <FormControlWrapper labelText={props.labelText}>
      <InputFormControlAbstraction
        inputType={InputTypes.Password}
        placeholder={props.placeholder}
        initialValue={props.initialValue}
      />
    </FormControlWrapper>
  );
}

export { PasswordInputControl };

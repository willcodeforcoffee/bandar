import * as React from "react";
import { FormControlWrapperProps, FormControlWrapper } from "./FormControlWrapper";
import {
  InputTypes,
  InputFormControlAbstractionProps,
  InputFormControlAbstraction,
} from "./InputFormControlAbstraction";

interface EmailAddressControlProps extends FormControlWrapperProps, InputFormControlAbstractionProps {
  initialValue?: string;
}

function EmailAddressControl(props: EmailAddressControlProps): JSX.Element {
  console.log("EmailAddressControl", props);
  return (
    <FormControlWrapper labelText={props.labelText}>
      <InputFormControlAbstraction
        inputType={InputTypes.Email}
        placeholder={props.placeholder}
        initialValue={props.initialValue}
      />
    </FormControlWrapper>
  );
}

export { EmailAddressControl };

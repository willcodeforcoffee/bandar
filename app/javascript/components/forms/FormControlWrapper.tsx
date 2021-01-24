import * as React from "react";

interface FormControlWrapperProps {
  labelText: string;
}

interface FormControlWrapperPropsImpl extends FormControlWrapperProps {
  children: JSX.Element;
}

function FormControlWrapper(props: FormControlWrapperPropsImpl): JSX.Element {
  return (
    <label className="block pt-1">
      <span>{props.labelText}:</span>
      {props.children}
    </label>
  );
}

export { FormControlWrapperProps, FormControlWrapper };

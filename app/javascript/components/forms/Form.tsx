import React, { FormEvent, ReactNode } from "react";

export type FormSubmitEvent = FormEvent<HTMLFormElement>;

interface FormProps {
  name: string;
  title?: string;
  onSubmit: (event: FormSubmitEvent) => void;
  children: ReactNode[];
}

function Form(props: FormProps): JSX.Element {
  const childControls: ReactNode[] = [];
  if (props.title) {
    childControls.unshift(
      <legend key="legend" className="text-lg font-bold block pt-1">
        {props.title}
      </legend>
    );
  }

  if (props.children instanceof Array) {
    props.children.forEach((child) => {
      childControls.push(child);
    });
  } else {
    childControls.push(props.children);
  }

  return (
    <form onSubmit={props.onSubmit} name={props.name} className="grid grid-cols-1 gap-3 pt-6">
      {childControls}
    </form>
  );
}

export { Form };

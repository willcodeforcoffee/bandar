import React, { ReactNode } from "react";

interface FormProps {
  legend?: string;
  children: ReactNode[];
}

function Form(props: FormProps): JSX.Element {
  const childControls: ReactNode[] = [];
  if (props.legend) {
    childControls.unshift(
      <legend key="legend" className="text-lg font-bold block pt-1">
        {props.legend}
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

  return <form className="grid grid-cols-1 gap-3 pt-6">{childControls}</form>;
}

export { Form };

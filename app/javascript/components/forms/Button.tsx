import * as React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick: (event: ClickEvent) => void;
}

export type ClickEvent = MouseEvent;

export function Button(props: ButtonProps): JSX.Element {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (null != props.onClick) {
      props.onClick(event.nativeEvent);
    }
  }

  const buttonType = null == props.type ? "button" : props.type;

  return (
    <button type={buttonType} className="px-2 py-3 bg-blue-400 text-white" onClick={handleClick}>
      {props.label}
    </button>
  );
}

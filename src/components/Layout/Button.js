import React from "react";

// Reusable button component
const Button = (props) => {
  // Change the button className based on the peceived props
  const btnClassName = props.className;

  return (
    <button className={btnClassName} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;

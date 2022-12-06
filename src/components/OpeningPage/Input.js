import React from "react";
import classes from "./Input.module.css";

// All props came from the MainPage component
const Input = (props) => {
  return (
    <input
      type="text"
      placeholder="E.g.: carrot, walnuts"
      className={classes.input}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;

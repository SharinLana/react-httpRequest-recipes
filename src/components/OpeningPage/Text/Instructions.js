import React from "react";
import classes from "./Instructions.module.css";

// Static instructions component
const Instructions = () => {
  return (
    <p className={classes.text}>
      Type in the main ingredient(s) and press "Enter" or the "Search" button to
      find up to 10 recipes below
    </p>
  );
};

export default Instructions;

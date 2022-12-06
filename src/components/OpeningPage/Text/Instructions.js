import React from "react";
import classes from "./Instructions.module.css";

// Static instructions component
const Instructions = () => {
  return (
    <p className={classes.text}>
      Type in the main ingredient(s) and press "Enter" key or click the "Search" button to
      find the list of up to 10 recipes
    </p>
  );
};

export default Instructions;

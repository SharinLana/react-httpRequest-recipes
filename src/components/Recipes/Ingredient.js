import React from "react";
import classes from "./Ingredient.module.css";
import appleIcon from "../../assets/icon-apple.png";

// Displaying the <li>s of the RecipeCard <ul>
const Ingredient = (props) => {
  const ingredient = props.ingredient.text;

  return (
    <li className={classes.li}>
      <img className={classes.icon} src={appleIcon} alt="icon" />
      {ingredient}
    </li>
  );
};

export default Ingredient;

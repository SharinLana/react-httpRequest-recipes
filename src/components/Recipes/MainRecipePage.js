import React from "react";
import Button from "../Layout/Button";
import classes from "./MainRecipePage.module.css";
import RecipeCard from "./RecipeCard";

// Props ame from App.js
const MainRecipePage = (props) => {
  return (
    <div className={classes["main-container"]}>
      <h2 className={classes.header}>Recipes</h2>
      <Button
        title="Back to Search"
        className={classes.btn}
        onClick={props.onGoBackBtn}
      />
      {props.recipes.map((obj, id) => (
        <RecipeCard key={id} recipe={obj.recipe} />
      ))}
    </div>
  );
};

export default MainRecipePage;

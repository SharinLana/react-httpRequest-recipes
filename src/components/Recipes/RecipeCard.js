import React from "react";
import Ingredient from "./Ingredient";
import classes from "./RecipeCard.module.css";

// Props came from MainRacipePage
const RecipeCard = (props) => {
  const recipeObj = props.recipe;
  const ingredientsArray = recipeObj.ingredients;

  return (
    <div className={classes["recipe-container"]}>
      <h3 className={classes.label}>
        {recipeObj.label}
        <span className={classes.source}>( by {recipeObj.source})</span>
      </h3>
      <p className={classes.calories}>
        Calories: {recipeObj.calories.toFixed(0)}
      </p>
      <img
        className={classes.image}
        src={recipeObj.image}
        alt={recipeObj.title}
      />
      <h3 className={classes.ingredients}>Ingredients:</h3>
      <ul className={classes.ul}>
        {/* Passing the data to a separate component for displaying */}
        {ingredientsArray.map((ingredient, id) => (
          <Ingredient key={id} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
